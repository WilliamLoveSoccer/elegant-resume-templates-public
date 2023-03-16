import React, { memo } from 'react';
import ExperienceItemA from '../../share/Work/ExperienceItemA';
import HeadingB from '../../share/Heading/HeadingB';
import experienceBlockHoc from './ExperienceBlockHoc';

const ExperienceB = ({ heading, items, marginTop, colors }) => {
    return (
        <div style={{ marginTop: marginTop + 'px', borderTopColor: colors.primary }} className="er-grid er-grid-cols-5 er-gap-4 er-border-t-2">
            <HeadingB content={heading} actionCreator={(newHeading) => ({ entity: 'exp', action: 'updateExpHeading', payload: newHeading })} />
            <div
                className="er-col-span-4 er-pt-2"
                style={{
                    marginTop: marginTop + 'px',
                }}
            >
                {items.map((item) => (
                    <ExperienceItemA id={item.id} item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default memo(experienceBlockHoc(ExperienceB));
