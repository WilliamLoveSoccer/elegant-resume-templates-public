import React, { memo } from 'react';
import ContactItem102 from '../../share/Contact/ContactItem102';
import contactBlockHOC from './ContactBlockHOC';

const ContactBlock102 = ({ getActionCreator }) => {
    return <ContactItem102 getActionCreator={getActionCreator} />;
};

export default contactBlockHOC(memo(ContactBlock102));
