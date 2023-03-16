import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import { useContactState } from '../../../hooks/useStoreState';
import { FaEnvelope, FaGlobe, FaMapMarker, FaPhoneAlt } from 'react-icons/fa';

const ContactItemB = ({ getActionCreator }) => {
    const contactState = useContactState();
    const visibleItems = contactState.items.filter((item) => item.visible === true);
    const { showIcon } = contactState;

    const renderIcon = (field) => {
        switch (field) {
            case 'email':
                return <FaEnvelope className="er-mr-3" size={12} />;
            case 'phone':
                return <FaPhoneAlt className="er-mr-3" size={12} />;
            case 'address':
                return <FaMapMarker className="er-mr-3" size={12} />;
            case 'website':
                return <FaGlobe className="er-mr-3" size={12} />;
        }
    };

    const render = () => {
        if (!showIcon) {
            return (
                <div>
                    {visibleItems.map(({ field }) => (
                        <p className="er-text-sm er-pb-2" key={field}>
                            <ContentEditableEle html={`${contactState[field]}`} actionCreator={getActionCreator(field)} />
                        </p>
                    ))}
                </div>
            );
        } else {
            return (
                <div>
                    {visibleItems.map(({ field }) => {
                        return (
                            <div className="er-flex er-items-center er-pb-2" key={field}>
                                {renderIcon(field)}
                                <p className="er-text-sm ">
                                    <ContentEditableEle html={`${contactState[field]}`} actionCreator={getActionCreator(field)} />
                                </p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    return render();
};

export default memo(ContactItemB);
