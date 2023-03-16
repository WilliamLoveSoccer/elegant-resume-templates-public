import React, { memo } from 'react';
import ContactItemA from '../../share/Contact/ContactItemA';
import contactBlockHOC from './ContactBlockHOC';

const ContactBlock01 = ({ getActionCreator }) => {
    return <ContactItemA getActionCreator={getActionCreator} />;
};

export default contactBlockHOC(memo(ContactBlock01));
