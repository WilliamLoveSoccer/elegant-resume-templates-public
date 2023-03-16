import React, { memo } from 'react';
import EducationItemA from '../../share/Education/EducationItemA';
import HeadingB from '../../share/Heading/HeadingB';
import educationBlockHOC from './EducationBlockHOC';

const EducationBlockB = ({ heading, items, marginTop, colors }) => {
    return (
        <div
            className="er-grid er-grid-cols-5 er-gap-4 er-border-t-2"
            style={{
                marginTop: marginTop + 'px',
                paddingTop: marginTop + 'px',
                borderTopColor: colors.primary,
            }}
        >
            <HeadingB content={heading} actionCreator={(newHeadingnpm) => ({ entity: 'edu', action: 'updateEduHeading', payload: newHeadingnpm })} />
            <div className="er-col-span-4">
                {items.map((item) => {
                    return <EducationItemA item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default educationBlockHOC(memo(EducationBlockB));
