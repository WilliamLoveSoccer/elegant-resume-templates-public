import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import ProjectItemB from '../../share/Projects/ProjectItemB';
import projectBlockHoc from './ProjectsBlockHoc';

const ProjectsBlockD = ({ heading, items, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(newHeading) => ({ entity: 'project', action: 'updateProjHeading', payload: newHeading })} />
            {items.map((item) => (
                <ProjectItemB id={item.id} item={item} key={item.id} />
            ))}
        </div>
    );
};

export default projectBlockHoc(memo(ProjectsBlockD));
