import React, { memo } from 'react';
import AcademicExpItemA from '../../share/AcademicExp/AcademicExpItemA';
import HeadingC from '../../share/Heading/HeadingC';
import academicExpBlockHoc from './AcademicExpBlockHoc';

const AcademicExpBlockC = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingC
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'academicExperience', action: 'updateAcademicExperienceHeading', payload: newHeading })}
            />
            {items.map((item) => (
                <AcademicExpItemA id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default academicExpBlockHoc(memo(AcademicExpBlockC));
