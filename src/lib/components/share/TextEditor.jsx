import React, { useState } from 'react';
// import RichTextEditor from 'react-rte';
import RichTextEditor from './richTextEditor/RichTextEditor';
import { useStoreDispatch } from '../../hooks/useStoreDispatch';
import { useMetadateState } from '../../hooks/useStoreState';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
const TextEditor = ({ textEditorHTML = '', actionCreator = {} }) => {
    const dispatch = useStoreDispatch();
    const { showGrammarly } = useMetadateState();

    const onTestEditorContentChange = (value) => {
        dispatch(actionCreator(value));
    };

    if (showGrammarly) {
        return (
            <GrammarlyEditorPlugin clientId="client_GZriB93ULQ9rwH3o766YkM">
                <div className="er-text-sm">
                    <RichTextEditor onChange={onTestEditorContentChange} prepopulatedHTML={textEditorHTML}></RichTextEditor>
                </div>
            </GrammarlyEditorPlugin>
        );
    } else {
        return (
            <div className="er-text-sm">
                <RichTextEditor onChange={onTestEditorContentChange} prepopulatedHTML={textEditorHTML}></RichTextEditor>
            </div>
        );
    }
};

export default TextEditor;
// import React, { useState } from 'react';
// import RichTextEditor from 'react-rte';
// import { useStoreDispatch } from '../../hooks/useStoreDispatch';
// import { useToolbarConfig } from '../../hooks/useConfig';
// import { useMetadateState } from '../../hooks/useStoreState';
// import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
// const TextEditor = ({ textEditorHTML = '', actionCreator = {} }) => {
//     const dispatch = useStoreDispatch();
//     const { showGrammarly } = useMetadateState();
//     const { showToolbarOnFocus } = useToolbarConfig();
//     const initTextEditorState = RichTextEditor.createValueFromString(textEditorHTML, 'html');

//     const [textEditorState, setTestEditorState] = useState(initTextEditorState);
//     const [displayStyle, setDisplayStyle] = useState('none');

//     const onTestEditorContentChange = (value) => {
//         dispatch(actionCreator(value.toString('html')));
//         setTestEditorState(value);
//     };

//     const onFocus = () => {
//         if (showToolbarOnFocus) setDisplayStyle('block');
//     };

//     const onBlur = () => {
//         setDisplayStyle('none');
//     };

//     const toolbarConfig = {
//         // Optionally specify the groups to display (displayed in the order listed).
//         display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
//         INLINE_STYLE_BUTTONS: [
//             { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
//             { label: 'Italic', style: 'ITALIC' },
//             { label: 'Underline', style: 'UNDERLINE' },
//         ],
//         BLOCK_TYPE_BUTTONS: [
//             { label: 'UL', style: 'unordered-list-item' },
//             { label: 'OL', style: 'ordered-list-item' },
//         ],
//     };

//     if (showGrammarly) {
//         return (
//             <GrammarlyEditorPlugin clientId="client_GZriB93ULQ9rwH3o766YkM">
//                 <RichTextEditor
//                     value={textEditorState}
//                     onChange={onTestEditorContentChange}
//                     rootStyle={{ background: 'none', border: 'none', fontSize: 'inherit !important', fontFamily: 'inherit' }}
//                     toolbarStyle={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         zIndex: 10,
//                         border: 'none',
//                         display: displayStyle,
//                     }}
//                     editorClassName="er-text-sm"
//                     onBlur={onBlur}
//                     onFocus={onFocus}
//                     blockStyleFn={() => ''} //used for cleaning default styles
//                     toolbarConfig={toolbarConfig}
//                 />
//             </GrammarlyEditorPlugin>
//         );
//     } else {
//         return (
//             <RichTextEditor
//                 value={textEditorState}
//                 onChange={onTestEditorContentChange}
//                 rootStyle={{ background: 'none', border: 'none', fontSize: 'inherit !important', fontFamily: 'inherit' }}
//                 toolbarStyle={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     zIndex: 10,
//                     border: 'none',
//                     display: displayStyle,
//                 }}
//                 editorClassName="er-text-sm"
//                 onBlur={onBlur}
//                 onFocus={onFocus}
//                 blockStyleFn={() => ''} //used for cleaning default styles
//                 toolbarConfig={toolbarConfig}
//             />
//         );
//     }
// };

// export default TextEditor;
