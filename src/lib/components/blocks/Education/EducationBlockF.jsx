import React, { memo } from 'react';
import EducationItemB from '../../share/Education/EducationItemB';
import HeadingA from '../../share/Heading/HeadingA';
import educationBlockHOC from './EducationBlockHOC';

const EducationBlockF = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(newHeading) => ({ entity: 'edu', action: 'updateEduHeading', payload: newHeading })} />
            {items.map((item) => {
                return <EducationItemB id={item.id} item={item} key={item.id} />;
            })}
        </div>
    );
};

export default educationBlockHOC(memo(EducationBlockF));
