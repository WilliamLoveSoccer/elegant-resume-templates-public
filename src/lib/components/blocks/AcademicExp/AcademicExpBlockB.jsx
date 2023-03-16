import React, { memo } from 'react';
import AcademicExpItemA from '../../share/AcademicExp/AcademicExpItemA';
import HeadingB from '../../share/Heading/HeadingB';
import academicExpBlockHoc from './AcademicExpBlockHoc';

const AcademicExpBlockB = ({ heading, items, marginTop, colors }) => {
    return (
        <div style={{ marginTop: marginTop + 'px', borderTopColor: colors.primary }} className="er-grid er-grid-cols-5 er-gap-4 er-border-t-2">
            <HeadingB
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'academicExperience', action: 'updateAcademicExperienceHeading', payload: newHeading })}
            />
            <div
                className="er-col-span-4 er-pt-2"
                style={{
                    marginTop: marginTop + 'px',
                }}
            >
                {items.map((item) => (
                    <AcademicExpItemA id={item.id} item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default academicExpBlockHoc(memo(AcademicExpBlockB));
