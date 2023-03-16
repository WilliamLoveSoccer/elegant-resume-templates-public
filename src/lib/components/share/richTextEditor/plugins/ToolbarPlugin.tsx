import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import {
    SELECTION_CHANGE_COMMAND,
    FORMAT_TEXT_COMMAND,
    $getSelection,
    $isRangeSelection,
    $createParagraphNode,
    CAN_UNDO_COMMAND,
    CAN_REDO_COMMAND,
    UNDO_COMMAND,
    REDO_COMMAND,
} from 'lexical';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $wrapNodes } from '@lexical/selection';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, REMOVE_LIST_COMMAND, $isListNode, ListNode } from '@lexical/list';
import { $isHeadingNode } from '@lexical/rich-text';

import { BsTextParagraph, BsTypeBold, BsTypeItalic, BsTypeUnderline, BsListOl, BsListUl } from 'react-icons/bs';
import { MdRedo, MdUndo, MdOutlineSubscript, MdOutlineSuperscript, MdLink } from 'react-icons/md';

const LowPriority = 1;

export default function ToolbarPlugin({
    disbaledToolbarMenus,
}: {
    disbaledToolbarMenus: {
        paragraph?: boolean;
        bulletList?: boolean;
        numberedList?: boolean;
        bold?: boolean;
    };
}): JSX.Element {
    const [editor] = useLexicalComposerContext();
    const toolbarRef = useRef(null);
    const [blockType, setBlockType] = useState('paragraph');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isSubscript, setIsSubscript] = useState(false);
    const [isSuperscript, setIsSuperscript] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const anchorNode = selection.anchor.getNode();
            const element = anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();
            const elementKey = element.getKey();
            const elementDOM = editor.getElementByKey(elementKey);
            if (elementDOM !== null) {
                if ($isListNode(element)) {
                    const parentList = $getNearestNodeOfType(anchorNode, ListNode);
                    const type = parentList ? parentList.getTag() : element.getTag();
                    setBlockType(type);
                } else {
                    const type = $isHeadingNode(element) ? element.getTag() : element.getType();
                    setBlockType(type);
                }
            }
            // Update text format
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            setIsSubscript(selection.hasFormat('subscript'));
            setIsSuperscript(selection.hasFormat('superscript'));

            //Update Links
            const parent = anchorNode.getParent();
            if ($isLinkNode(parent) || $isLinkNode(anchorNode)) {
                setIsLink(true);
            } else {
                setIsLink(false);
            }
        }
    }, [editor]);

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
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand<boolean>(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload);
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand<boolean>(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload);
                    return false;
                },
                LowPriority
            )
        );
    }, [editor, updateToolbar]);

    const formatParagraph = () => {
        if (blockType !== 'paragraph') {
            editor.update(() => {
                const selection = $getSelection();

                if ($isRangeSelection(selection)) {
                    $wrapNodes(selection, () => $createParagraphNode());
                }
            });
        }
    };

    const formatBulletList = () => {
        if (blockType !== 'ul') {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        }
    };

    const formatNumberedList = () => {
        if (blockType !== 'ol') {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        }
    };

    const insertLink = useCallback(() => {
        if (!isLink) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
        } else {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }
    }, [editor, isLink]);

    return (
        <div className="toolbar" ref={toolbarRef}>
            {
                <>
                    <button
                        disabled={!canUndo}
                        onClick={() => {
                            editor.dispatchCommand(UNDO_COMMAND, undefined);
                        }}
                        title={'Undo'}
                        type="button"
                        className={'toolbar-item spaced'}
                        aria-label="Undo"
                    >
                        <MdUndo />
                    </button>
                    <button
                        disabled={!canRedo}
                        onClick={() => {
                            editor.dispatchCommand(REDO_COMMAND, undefined);
                        }}
                        title={'Redo'}
                        type="button"
                        className={'toolbar-item spaced'}
                        aria-label="Redo"
                    >
                        <MdRedo />
                    </button>
                    <div className="er-mr-3"></div>

                    <button
                        disabled={disbaledToolbarMenus.paragraph}
                        className={'toolbar-item spaced ' + (blockType === 'paragraph' ? 'active' : '')}
                        onClick={formatParagraph}
                    >
                        <BsTextParagraph />
                    </button>

                    <button
                        disabled={disbaledToolbarMenus.paragraph}
                        className={'toolbar-item spaced ' + (blockType === 'ul' ? 'active' : '')}
                        onClick={formatBulletList}
                    >
                        <BsListUl />
                    </button>
                    <button
                        disabled={disbaledToolbarMenus.paragraph}
                        className={'toolbar-item spaced ' + (blockType === 'ol' ? 'active' : '')}
                        onClick={formatNumberedList}
                    >
                        <BsListOl />
                    </button>
                    <div className="er-mr-3"></div>

                    <button
                        disabled={disbaledToolbarMenus.paragraph}
                        onClick={() => {
                            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                        }}
                        className={'toolbar-item spaced ' + (isBold ? 'active' : '')}
                        aria-label="Format Bold"
                    >
                        <BsTypeBold />
                    </button>
                    <button
                        onClick={() => {
                            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                        }}
                        className={'toolbar-item spaced ' + (isItalic ? 'active' : '')}
                        aria-label="Format Italics"
                    >
                        <BsTypeItalic />
                    </button>
                    <button
                        onClick={() => {
                            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                        }}
                        className={'toolbar-item spaced ' + (isUnderline ? 'active' : '')}
                        aria-label="Format Underline"
                    >
                        <BsTypeUnderline />
                    </button>
                    <button
                        onClick={() => {
                            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
                        }}
                        className={'toolbar-item spaced ' + (isSubscript ? 'active' : '')}
                        aria-label="Format Subscript"
                    >
                        <MdOutlineSubscript />
                    </button>
                    <button
                        onClick={() => {
                            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
                        }}
                        className={'toolbar-item spaced ' + (isSuperscript ? 'active' : '')}
                        aria-label="Format Superscript"
                    >
                        <MdOutlineSuperscript />
                    </button>
                    <button
                        onClick={insertLink}
                        className={'toolbar-item spaced ' + (isLink ? 'active' : '')}
                        aria-label="Insert link"
                        title="Insert link"
                        type="button"
                    >
                        <MdLink />
                    </button>
                </>
            }
        </div>
    );
}
