import React, { memo } from 'react';
import ContentEditableEle from '../../share/ContentEditableEle/ContentEditableEle';
import { useContactState, useMetadateState } from '../../../hooks/useStoreState';
import ContactBlock102 from '../Contact/ContactBlock102';
import Photo from '../Photo/Photo';

const Hero03 = () => {
    const { name } = useContactState();
    const { colors } = useMetadateState();

    return (
        <div className="er-flex er-justify-between er-items-center er-pb-2 er-w-full">
            <div>
                <h1 className="er-text-2xl er-mb-2 er-font-bold">
                    <ContentEditableEle
                        html={`${name}`}
                        style={{ color: colors.primary }}
                        actionCreator={(newHeading) => ({ entity: 'contact', action: 'updateContactName', payload: newHeading })}
                    />
                </h1>
                <ContactBlock102 />
            </div>
            <div>
                <Photo />
            </div>
        </div>
    );
};

export default memo(Hero03);
