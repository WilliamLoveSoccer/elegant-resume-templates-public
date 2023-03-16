import React, { memo } from 'react';
import ProjectItemA from '../../share/Projects/ProjectItemA';
import HeadingC from '../../share/Heading/HeadingC';
import projectBlockHoc from './ProjectsBlockHoc';

const ProjectsBlockC = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingC content={heading} actionCreator={(newHeading) => ({ entity: 'project', action: 'updateProjHeading', payload: newHeading })} />
            {items.map((item) => (
                <ProjectItemA id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default projectBlockHoc(memo(ProjectsBlockC));
