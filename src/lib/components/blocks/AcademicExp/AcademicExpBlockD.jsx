import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import AcademicExpItemB from '../../share/AcademicExp/AcademicExpItemB';
import academicExpBlockHoc from './AcademicExpBlockHoc';

const AcademicExpBlockA = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'academicExperience', action: 'updateAcademicExperienceHeading', payload: newHeading })}
            />
            {items.map((item) => (
                <AcademicExpItemB id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default academicExpBlockHoc(memo(AcademicExpBlockA));
