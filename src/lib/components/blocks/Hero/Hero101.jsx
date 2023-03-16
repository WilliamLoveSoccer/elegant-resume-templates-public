import React, { memo } from 'react';
import ContentEditableEle from '../../share/ContentEditableEle/ContentEditableEle';
import { useContactState, useMetadateState } from '../../../hooks/useStoreState';
import ContactBlock101 from '../Contact/ContactBlock101';
import Photo from '../Photo/Photo';

const Hero101 = () => {
    const { name } = useContactState();
    const { colors } = useMetadateState();

    return (
        <div className="er-relative er-flex er-items-center er-justify-between er-w-full" style={{ minHeight: 128 }}>
            <div style={{ width: '100px' }}></div>
            <div className="er-flex-1">
                <h1 className="er-text-2xl er-mb-2 er-text-center er-font-bold">
                    <ContentEditableEle
                        html={`${name}`}
                        style={{ color: colors.primary }}
                        actionCreator={(newName) => ({ entity: 'contact', action: 'updateContactName', payload: newName })}
                    />
                </h1>
                <ContactBlock101 />
            </div>
            <div className="" style={{ right: 0, top: 0 }}>
                <Photo />
            </div>
        </div>
    );
};

export default memo(Hero101);
