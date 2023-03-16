import React, { memo } from 'react';
import ContentEditableEle from '../../share/ContentEditableEle/ContentEditableEle';
import { useContactState, useMetadateState } from '../../../hooks/useStoreState';
import ContactBlock01 from '../Contact/ContactBlock01';

const Hero03 = () => {
    const { name } = useContactState();
    const { colors } = useMetadateState();

    return (
        <div>
            <h1 className="er-text-2xl er-mb-2 er-font-bold">
                <ContentEditableEle
                    html={`${name}`}
                    style={{ color: colors.primary }}
                    actionCreator={(newHeading) => ({ entity: 'contact', action: 'updateContactName', payload: newHeading })}
                />
            </h1>
            <ContactBlock01 />
        </div>
    );
};

export default memo(Hero03);
