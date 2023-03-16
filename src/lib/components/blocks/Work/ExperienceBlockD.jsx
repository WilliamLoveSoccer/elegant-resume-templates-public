import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import ExperienceItemB from '../../share/Work/ExperienceItemB';
import experienceBlockHoc from './ExperienceBlockHoc';

const ExperienceBlockD = ({ heading, items, marginTop }) => {
    // console.log('expericen block a called');
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(newHeading) => ({ entity: 'exp', action: 'updateExpHeading', payload: newHeading })} />
            {items.map((item) => (
                <ExperienceItemB id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default memo(experienceBlockHoc(ExperienceBlockD));
