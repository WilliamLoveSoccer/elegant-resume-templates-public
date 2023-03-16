import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import { useContactState } from '../../../hooks/useStoreState';

const ContactItem102 = ({ getActionCreator }) => {
    const contactState = useContactState();

    return (
        <div>
            <p className="er-text-sm er-pb-2">
                <ContentEditableEle html={`${contactState.contactInfo}`} tagName="span" actionCreator={getActionCreator('contactInfo')} />
            </p>
        </div>
    );
};

export default memo(ContactItem102);
