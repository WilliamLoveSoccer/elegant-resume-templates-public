import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import { useContactState } from '../../../hooks/useStoreState';

const ContactItemA = ({ getActionCreator }) => {
    const contactState = useContactState();
    const visibleItems = contactState.items.filter((item) => item.visible === true);

    return (
        <div>
            <div className="er-flex er-justify-center er-text-sm er-pb-2">
                {visibleItems.map(({ field }, index) => (
                    <React.Fragment key={field}>
                        <ContentEditableEle html={`${contactState[field]}`} tagName="span" actionCreator={getActionCreator(field)} />
                        {index < visibleItems.length - 1 && <div className="er-px-1">|</div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default memo(ContactItemA);
