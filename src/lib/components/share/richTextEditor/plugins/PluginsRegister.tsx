import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import FloatingLinkEditorPlugin from './FloatingLinkEditorPlugin';
import ToolbarPlugin from './ToolbarPlugin';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import * as React from 'react';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    $createParagraphNode,
    $getRoot,
    EditorState,
    ElementNode,
    FOCUS_COMMAND,
    LexicalEditor,
    LexicalNode,
    TextNode,
    COMMAND_PRIORITY_LOW,
    KEY_TAB_COMMAND,
} from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { createPortal } from 'react-dom';

function Placeholder() {
    return <div className="editor-placeholder">Type something...</div>;
}
const PluginsRegister = ({
    prepopulatedHTML,
    disbaledToolbarMenus,
    onChange,
}: {
    prepopulatedHTML: string;
    disbaledToolbarMenus: {
        paragraph?: boolean;
        bulletList?: boolean;
        numberedList?: boolean;
        bold?: boolean;
    };
    onChange: Function;
}) => {
    const [editor] = useLexicalComposerContext();

    const wrapperRef = useRef(null);
    const toolbarWrapperRef = useRef(null);

    const [hasFocus, setHasFocus] = useState(() => {
        return editor.getRootElement() === document.activeElement;
    });

    const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(prepopulatedHTML, 'text/html');
            const nodes = $generateNodesFromDOM(editor, dom);
            const root = $getRoot();
            // root.clear();

            const formattedNodes: LexicalNode[] = [];
            nodes.forEach((node) => {
                if (node instanceof TextNode) {
                    const paragraphNode = $createParagraphNode();
                    paragraphNode.append(node);
                    formattedNodes.push(paragraphNode);
                } else if (node instanceof ElementNode) {
                    formattedNodes.push(node);
                }
            });

            root.append(...formattedNodes);
            root.getFirstChild().remove();
        });
    }, []);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (
                wrapperRef.current &&
                toolbarWrapperRef.current &&
                !(wrapperRef.current.contains(event.target) || toolbarWrapperRef.current.contains(event.target))
            ) {
                // console.log(wrapperRef.current, event.target, document.getElementsByClassName('editor-toolbar')[0]);
                setHasFocus(false);
            } else {
                setHasFocus(true);
            }
        }
        // Bind the event listener
        if (hasFocus) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [hasFocus]);

    useLayoutEffect(() => {
        setHasFocus(editor.getRootElement() === document.activeElement);
        return mergeRegister(
            editor.registerCommand(
                FOCUS_COMMAND,
                () => {
                    setHasFocus(true);
                    return false;
                },
                COMMAND_PRIORITY_LOW
            ),
            editor.registerCommand(
                KEY_TAB_COMMAND,
                (payload) => {
                    const event: KeyboardEvent = payload;
                    setHasFocus(false);
                    // event.preventDefault();
                    // console.log('testtesttest');
                    // return editor.dispatchCommand(event.shiftKey ? OUTDENT_CONTENT_COMMAND : INDENT_CONTENT_COMMAND, undefined);
                    return true;
                },
                COMMAND_PRIORITY_LOW
            )
        );
    }, [editor]);

    const onContentChange = (editorState: EditorState, editor: LexicalEditor) => {
        editor.update(() => {
            const htmlString = $generateHtmlFromNodes(editor, null);
            onChange(htmlString);
        });
    };

    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    return (
        <div className="editor-container" ref={wrapperRef}>
            {createPortal(
                <div ref={toolbarWrapperRef} style={{ display: hasFocus ? 'block' : 'none' }}>
                    <div className="editor-toolbar">
                        <ToolbarPlugin disbaledToolbarMenus={disbaledToolbarMenus} />
                    </div>
                </div>,
                document.getElementById('editor-toolbar') ?? document.getElementById('er-internal-toolbar')
            )}
            <div className="editor-inner">
                <HistoryPlugin />
                <ListPlugin />
                <LinkPlugin />

                <RichTextPlugin
                    contentEditable={
                        <div ref={onRef}>
                            <ContentEditable className="editor-input" />
                        </div>
                    }
                    placeholder={<Placeholder />}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <OnChangePlugin ignoreSelectionChange={true} onChange={onContentChange} />
                {floatingAnchorElem && (
                    <>
                        <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} hasFocus={hasFocus} />
                    </>
                )}
            </div>
        </div>
    );
};

export default PluginsRegister;
