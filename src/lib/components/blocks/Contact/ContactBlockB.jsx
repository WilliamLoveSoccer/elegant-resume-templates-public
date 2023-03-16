import React, { memo } from 'react';
import ContactItemB from '../../share/Contact/ContactItemB';
import HeadingA from '../../share/Heading/HeadingA';
import contactBlockHOC from './ContactBlockHOC';

const ContactBlockB = ({ heading, marginTop, getActionCreator }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }} className="pb-1">
            <HeadingA content={heading} actionCreator={(heading) => ({ entity: 'contact', action: 'updateContactHeading', payload: heading })} />

            <ContactItemB getActionCreator={getActionCreator} />
        </div>
    );
};

export default memo(contactBlockHOC(ContactBlockB));
