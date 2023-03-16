import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import { useContactState } from '../../../hooks/useStoreState';
import TextEditor from '../TextEditor';

const ContactItem101 = ({ getActionCreator }) => {
    const contactState = useContactState();
    const visibleItems = contactState.items.filter((item) => item.visible === true);

    return (
        <div>
            <p className="er-text-center er-text-sm er-pb-2">
                {/* {visibleItems.map(({ field, name }, index) => (
                    <React.Fragment key={field}>
                        <span>{name}: </span>
                        <ContentEditableEle html={`${contactState[field]}`} tagName="span" actionCreator={getActionCreator(field)} />
                        {index < visibleItems.length - 1 && ` | `}
                    </React.Fragment>
                ))} */}
                <ContentEditableEle html={`${contactState.contactInfo}`} tagName="span" actionCreator={getActionCreator('contactInfo')} />
                {/* <TextEditor textEditorHTML={`${contactState.contactInfo}`} actionCreator={getActionCreator('contactInfo')} /> */}
            </p>
        </div>
    );
};

export default memo(ContactItem101);
