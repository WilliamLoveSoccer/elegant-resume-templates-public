import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import AcademicExpItemA from '../../share/AcademicExp/AcademicExpItemA';
import academicExpBlockHoc from './AcademicExpBlockHoc';

const AcademicExpBlockA = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'academicExperience', action: 'updateAcademicExperienceHeading', payload: newHeading })}
            />
            {items.map((item) => (
                <AcademicExpItemA id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default academicExpBlockHoc(memo(AcademicExpBlockA));
