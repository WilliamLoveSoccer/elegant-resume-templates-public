import React, { memo } from 'react';
import ProjectItemA from '../../share/Projects/ProjectItemA';
import HeadingB from '../../share/Heading/HeadingB';
import projectBlockHoc from './ProjectsBlockHoc';

const ProjectsBlockB = ({ heading, items, marginTop, colors }) => {
    return (
        <div style={{ marginTop: marginTop + 'px', borderTopColor: colors.primary }} className="er-grid er-grid-cols-5 er-gap-4 er-border-t-2">
            <HeadingB content={heading} actionCreator={(newHeading) => ({ entity: 'project', action: 'updateProjHeading', payload: newHeading })} />
            <div
                className="er-col-span-4 er-pt-2"
                style={{
                    marginTop: marginTop + 'px',
                }}
            >
                {items.map((item) => (
                    <ProjectItemA id={item.id} item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default projectBlockHoc(memo(ProjectsBlockB));
