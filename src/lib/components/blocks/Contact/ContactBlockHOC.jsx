import React from 'react';
import { useContactState } from '../../../hooks/useStoreState';

const contactBlockHOC = (ContactBlock) => {
    const WrappedComponent = (props) => {
        const { visible, heading } = useContactState();

        const getActionCreator = (field) => {
            switch (field) {
                case 'phone': {
                    return (newPhone) => ({ entity: 'contact', action: 'updateContactPhone', payload: newPhone });
                }
                case 'email': {
                    return (newEmail) => ({ entity: 'contact', action: 'updateContactEmail', payload: newEmail });
                }
                case 'address': {
                    return (newAddress) => ({ entity: 'contact', action: 'updateContactAddress', payload: newAddress });
                }
                case 'website': {
                    return (newWebsite) => ({ entity: 'contact', action: 'updateContactWebsite', payload: newWebsite });
                }
                case 'birthDate': {
                    return (newBirthDate) => ({ entity: 'contact', action: 'updateContactBirthDate', payload: newBirthDate });
                }
                case 'birthPlace': {
                    return (newBirthPlace) => ({ entity: 'contact', action: 'updateContactBirthPlace', payload: newBirthPlace });
                }
                case 'contactInfo': {
                    return (newContactInfo) => ({ entity: 'contact', action: 'updateContactInfo', payload: newContactInfo });
                }
                default: {
                    return () => {};
                }
            }
        };

        if (visible) return <ContactBlock heading={heading} getActionCreator={getActionCreator} {...props} />;
        else return <div />;
    };
    return WrappedComponent;
};

export default contactBlockHOC;
