import React, { memo } from 'react';
import ExperienceItemA from '../../share/Work/ExperienceItemA';
import HeadingC from '../../share/Heading/HeadingC';
import experienceBlockHoc from './ExperienceBlockHoc';

const ExperienceBlockC = ({ heading, items, marginTop }) => {
    return (
        items.length > 0 && (
            <div style={{ marginTop: marginTop + 'px' }}>
                <HeadingC content={heading} actionCreator={(newHeading) => ({ entity: 'exp', action: 'updateExpHeading', payload: newHeading })} />
                {items.map((item) => (
                    <ExperienceItemA id={item.id} item={item} key={item.id} />
                ))}
            </div>
        )
    );
};

export default memo(experienceBlockHoc(ExperienceBlockC));
