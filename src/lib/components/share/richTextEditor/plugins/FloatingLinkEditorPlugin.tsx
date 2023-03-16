import { $isAutoLinkNode, $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import {
    $getSelection,
    $isRangeSelection,
    BLUR_COMMAND,
    COMMAND_PRIORITY_CRITICAL,
    COMMAND_PRIORITY_HIGH,
    COMMAND_PRIORITY_LOW,
    FOCUS_COMMAND,
    GridSelection,
    KEY_ESCAPE_COMMAND,
    LexicalEditor,
    NodeSelection,
    RangeSelection,
    SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { Dispatch, useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';

import { getSelectedNode } from '../utils/getSelectedNode';
import { setFloatingElemPosition } from '../utils/setFloatingElemPosition';
import { sanitizeUrl } from '../utils/url';
import { MdCheck, MdClose, MdEdit, MdSave } from 'react-icons/md';

function FloatingLinkEditor({
    editor,
    isOpen,
    setIsOpen,
    anchorElem,
}: {
    editor: LexicalEditor;
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>;
    anchorElem: HTMLElement;
}): JSX.Element {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [editedLinkUrl, setEditedLinkUrl] = useState('');
    const [isUrlChanged, setIsUrlChanged] = useState(false);
    const [lastSelection, setLastSelection] = useState<RangeSelection | GridSelection | NodeSelection | null>(null);

    const updateLinkEditor = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent)) {
                setEditedLinkUrl(parent.getURL());
            } else if ($isLinkNode(node)) {
                setEditedLinkUrl(node.getURL());
            } else {
                setEditedLinkUrl('');
            }
        }
        const editorElem = editorRef.current;
        const nativeSelection = window.getSelection();
        const activeElement = document.activeElement;

        if (editorElem === null) {
            return;
        }

        const rootElement = editor.getRootElement();

        if (
            selection !== null &&
            nativeSelection !== null &&
            rootElement !== null &&
            rootElement.contains(nativeSelection.anchorNode) &&
            editor.isEditable()
        ) {
            const domRange = nativeSelection.getRangeAt(0);
            let rect;
            if (nativeSelection.anchorNode === rootElement) {
                let inner = rootElement;
                while (inner.firstElementChild != null) {
                    inner = inner.firstElementChild as HTMLElement;
                }
                rect = inner.getBoundingClientRect();
            } else {
                rect = domRange.getBoundingClientRect();
            }

            setFloatingElemPosition(rect, editorElem, anchorElem);
            setLastSelection(selection);
        } else if (!activeElement || activeElement.className !== 'link-input') {
            if (rootElement !== null) {
                setFloatingElemPosition(null, editorElem, anchorElem);
            }
            setLastSelection(null);
            setEditedLinkUrl('');
        }

        return true;
    }, [anchorElem, editor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateLinkEditor();
                });
            }),

            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                () => {
                    updateLinkEditor();
                    return true;
                },
                COMMAND_PRIORITY_LOW
            ),
            editor.registerCommand(
                KEY_ESCAPE_COMMAND,
                () => {
                    if (isOpen) {
                        setIsOpen(false);
                        return true;
                    }
                    return false;
                },
                COMMAND_PRIORITY_HIGH
            )
        );
    }, [editor, updateLinkEditor, setIsOpen, isOpen]);

    useEffect(() => {
        editor.getEditorState().read(() => {
            updateLinkEditor();
        });
    }, [editor, updateLinkEditor]);

    const monitorInputInteraction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleLinkSubmission();
        } else if (event.key === 'Escape') {
            event.preventDefault();
        }
    };

    const handleLinkSubmission = () => {
        if (lastSelection !== null) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
            setIsUrlChanged(false);
        }
    };

    return (
        <div ref={editorRef} className="link-editor" style={{}}>
            {isOpen && (
                <div className="er-flex er-justify-between er-items-center er-font-base er-p-3 er-rounded">
                    <input
                        ref={inputRef}
                        className="link-input er-flex-1 er-bg-gray-200 er-rounded er-px-3 er-py-1 er-mr-3 er-outline-none er-border-none"
                        value={editedLinkUrl}
                        onChange={(event) => {
                            setEditedLinkUrl(event.target.value);
                            setIsUrlChanged(true);
                        }}
                        onKeyDown={(event) => {
                            monitorInputInteraction(event);
                        }}
                    />
                    <div className="er-flex">
                        <button
                            disabled={!isUrlChanged}
                            className="button er-mr-1"
                            role="button"
                            tabIndex={0}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={handleLinkSubmission}
                        >
                            <MdSave />
                        </button>
                        <button
                            className="button"
                            role="button"
                            tabIndex={0}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <MdClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function useFloatingLinkEditorToolbar(editor: LexicalEditor, anchorElem: HTMLElement, hasFocus: boolean): JSX.Element | null {
    const [activeEditor, setActiveEditor] = useState(editor);
    const [isOpen, setIsOpen] = useState(false);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection);
            const linkParent = $findMatchingParent(node, $isLinkNode);
            const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode);

            // We don't want this menu to open for auto links.
            if (linkParent != null && autoLinkParent == null) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        }
    }, []);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_payload, newEditor) => {
                    updateToolbar();
                    setActiveEditor(newEditor);
                    return false;
                },
                COMMAND_PRIORITY_CRITICAL
            )
        );
    }, [editor, updateToolbar]);

    useEffect(() => {
        if (!hasFocus) setIsOpen(false);
    }, [hasFocus]);

    return createPortal(<FloatingLinkEditor editor={activeEditor} isOpen={isOpen} anchorElem={anchorElem} setIsOpen={setIsOpen} />, anchorElem);
}

export default function FloatingLinkEditorPlugin({
    anchorElem = document.body,
    hasFocus,
}: {
    anchorElem?: HTMLElement;
    hasFocus: boolean;
}): JSX.Element | null {
    const [editor] = useLexicalComposerContext();
    return useFloatingLinkEditorToolbar(editor, anchorElem, hasFocus);
}
