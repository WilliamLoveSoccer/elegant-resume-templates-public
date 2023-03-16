import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import EducationItemA from '../../share/Education/EducationItemA';
import HeadingA from '../../share/Heading/HeadingA';
import educationBlockHOC from './EducationBlockHOC';

const EducationBlockA = ({ heading, items, marginTop }) => {
    const { HeadingComponent } = useContext(PageContext);

    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            {HeadingComponent ? (
                <HeadingComponent
                    content={heading}
                    actionCreator={(newHeading) => ({ entity: 'edu', action: 'updateEduHeading', payload: newHeading })}
                />
            ) : (
                <HeadingA content={heading} actionCreator={(newHeading) => ({ entity: 'edu', action: 'updateEduHeading', payload: newHeading })} />
            )}

            {items.map((item) => {
                return <EducationItemA id={item.id} item={item} key={item.id} />;
            })}
        </div>
    );
};

export default educationBlockHOC(memo(EducationBlockA));
