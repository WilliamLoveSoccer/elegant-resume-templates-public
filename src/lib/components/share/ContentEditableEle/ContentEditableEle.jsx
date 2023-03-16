import React, { useState } from 'react';
import { useStoreDispatch } from '../../../hooks/useStoreDispatch';
import Editor from '../richTextEditor/RichTextEditor';

const ContentEditableEle = ({ html = '', tagName = 'span', className = '', style = {}, actionCreator = {} }) => {
    const dispatch = useStoreDispatch();
    const [showPlaceholder, setShowPlaceholder] = useState(false);

    const onChange = (value) => {
        if (typeof actionCreator === 'function') {
            dispatch(actionCreator(value));
        }
        if (value === '<p class="editor-paragraph"><br></p>') {
            setShowPlaceholder(true);
        } else {
            setShowPlaceholder(false);
        }
    };

    return (
        <div style={{ minWidth: '10px' }}>
            <Editor
                prepopulatedHTML={html}
                disbaledToolbarMenus={{ paragraph: true, bulletList: true, numberedList: true, bold: true }}
                onChange={onChange}
            />
            {showPlaceholder && (
                <p id="er-placeholder" style={{ height: 0, overflow: 'hidden' }}>
                    Type Something...
                </p>
            )}
        </div>
    );
};

export default ContentEditableEle;
