import React, { memo } from 'react';
import EducationItemA from '../../share/Education/EducationItemA';
import HeadingC from '../../share/Heading/HeadingC';
import educationBlockHOC from './EducationBlockHOC';

const EducationBlockC = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingC content={heading} actionCreator={(newHeading) => ({ entity: 'edu', action: 'updateEduHeading', payload: newHeading })} />
            {items.map((item) => {
                return <EducationItemA id={item.id} item={item} key={item.id} />;
            })}
        </div>
    );
};

export default educationBlockHOC(memo(EducationBlockC));
