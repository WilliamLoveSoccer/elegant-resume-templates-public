import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import ProjectItemA from '../../share/Projects/ProjectItemA';
import projectBlockHoc from './ProjectsBlockHoc';

const ProjectsBlockA = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(newHeading) => ({ entity: 'project', action: 'updateProjHeading', payload: newHeading })} />
            {items.map((item) => (
                <ProjectItemA id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default projectBlockHoc(memo(ProjectsBlockA));
