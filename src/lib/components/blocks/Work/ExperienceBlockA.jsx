import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import ExperienceItemA from '../../share/Work/ExperienceItemA';
import experienceBlockHoc from './ExperienceBlockHoc';

const ExperienceBlockA = ({ heading, items, marginTop }) => {
    // console.log('expericen block a called');
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(newHeading) => ({ entity: 'exp', action: 'updateExpHeading', payload: newHeading })} />
            {items.map((item) => (
                <ExperienceItemA id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default memo(experienceBlockHoc(ExperienceBlockA));
