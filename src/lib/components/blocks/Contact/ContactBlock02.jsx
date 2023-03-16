import React, { memo } from 'react';
import ContactItemB from '../../share/Contact/ContactItemB';
import contactBlockHOC from './ContactBlockHOC';

const ContactBlock02 = ({ getActionCreator }) => {
    return <ContactItemB getActionCreator={getActionCreator} />;
};

export default contactBlockHOC(memo(ContactBlock02));
