import React, { memo } from 'react';
import ContentEditableEle from '../../share/ContentEditableEle/ContentEditableEle';
import { useContactState, useMetadateState } from '../../../hooks/useStoreState';
import ContactBlock01 from '../Contact/ContactBlock01';
import Photo from '../Photo/Photo';

const Hero05 = () => {
    const { name } = useContactState();
    const { colors } = useMetadateState();

    return (
        <div className="er-relative er-flex er-items-center er-justify-center" style={{ minHeight: 128 }}>
            <div>
                <h1 className="er-text-2xl er-mb-2 er-text-center er-font-bold">
                    <ContentEditableEle
                        html={`${name}`}
                        style={{ color: colors.primary }}
                        actionCreator={(newName) => ({ entity: 'contact', action: 'updateContactName', payload: newName })}
                    />
                </h1>
                <ContactBlock01 />
            </div>
            <div className="er-absolute" style={{ right: 0, top: 0 }}>
                <Photo />
            </div>
        </div>
    );
};

export default memo(Hero05);
