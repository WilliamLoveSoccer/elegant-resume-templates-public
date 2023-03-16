import React, { memo } from 'react';
import ContactItem101 from '../../share/Contact/ContactItem101';
import contactBlockHOC from './ContactBlockHOC';

const ContactBlock101 = ({ getActionCreator }) => {
    return <ContactItem101 getActionCreator={getActionCreator} />;
};

export default contactBlockHOC(memo(ContactBlock101));
