import React, { memo } from 'react';
import { useContactState, useMetadateState } from '../../../hooks/useStoreState';
import ContentEditableEle from '../../share/ContentEditableEle/ContentEditableEle';
import ContactBlock02 from '../Contact/ContactBlock02';

const Hero02 = () => {
    const { name } = useContactState();
    const { colors } = useMetadateState();

    return (
        <div className="er-flex er-justify-between er-items-center er-w-full er-pb-8">
            <h1 className="er-text-3xl er-mb-2 er-text-center er-font-bold">
                <ContentEditableEle
                    html={`${name}`}
                    style={{ color: colors.primary }}
                    actionCreator={(newHeading) => ({ entity: 'contact', action: 'updateContactName', payload: newHeading })}
                />
            </h1>
            <ContactBlock02 />
        </div>
    );
};

export default memo(Hero02);
