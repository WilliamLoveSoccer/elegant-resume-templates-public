import React, { memo } from 'react';
import ContentEditableEle from '../../share/ContentEditableEle/ContentEditableEle';
import { useContactState, useMetadateState } from '../../../hooks/useStoreState';
import ContactBlock01 from '../Contact/ContactBlock01';

const Hero01 = () => {
    const { name } = useContactState();
    const { colors } = useMetadateState();

    return (
        <div>
            <div className="er-text-2xl er-mb-2 er-flex er-justify-center er-font-bold">
                <ContentEditableEle
                    html={`${name}`}
                    style={{ color: colors.primary }}
                    actionCreator={(newName) => ({ entity: 'contact', action: 'updateContactName', payload: newName })}
                />
            </div>
            <ContactBlock01 />
        </div>
    );
};

export default memo(Hero01);
