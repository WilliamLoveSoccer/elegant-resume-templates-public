import React, { memo, useEffect, useRef } from 'react';
import PageContext from '../../contexts/PageContext';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import EducationBlockF from '../blocks/Education/EducationBlockF';
import { getMainSectionTopMargin, getSubSectionTopMargin } from '../util/utils';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import ObjectiveBlockA from '../blocks/Objective/ObjectiveBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import Hero02 from '../blocks/Hero/Hero02';
import templateWrap from '../hoc/templateWrap';
import DraggableBlocksC from '../share/DraggableBlocks/DraggableBlocksC';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockA from '../blocks/AcademicExp/AcademicExpBlockA';

const header_style = {
    h_position: '',
    b_border: '',
    t_border: '',
};

const MainSectionBlocks = {
    objective: ObjectiveBlockA,
    experience: ExperienceBlockA,
    education: EducationBlockA,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    awards: AwardsBlock01,
};
const SubSectionBlocks = {
    objective: ObjectiveBlockA,
    experience: ExperienceBlockA,
    education: EducationBlockF,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    awards: AwardsBlock01,
};

const Template = (props) => {
    const { fitToOnePage, topMargin, subsectionTopMargin, draggableBlocks, setTopMargin, setSubsectionTopMargin } = props;
    const mounted = useRef();

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            let newTopMargin = 0;
            let newSubsectionTopMargin = 0;
            if (fitToOnePage) {
                newTopMargin = getMainSectionTopMargin(topMargin);
                newSubsectionTopMargin = getSubSectionTopMargin(newTopMargin, subsectionTopMargin);
            }
            setTopMargin(newTopMargin);
            setSubsectionTopMargin(newSubsectionTopMargin);
        }
    }, [fitToOnePage]);

    return (
        <PageContext.Provider value={{ topMargin, header_style }}>
            <div id="HeadingBlock" className="er-pb-4">
                <Hero02 />
                <ObjectiveBlockA firstTopMargin={0} />
            </div>
            <div className="er-grid er-grid-cols-7 er-gap-6">
                <div className="er-col-span-5">
                    <div id="resumeMainSection">
                        <DraggableBlocksC
                            draggableBlocks={draggableBlocks[0]}
                            availableBlocks={MainSectionBlocks}
                            firstItemCtx={{ topMargin: 0, header_style }}
                            otherItemCtx={{ topMargin, header_style }}
                        />
                    </div>
                </div>
                <div className="er-col-span-2">
                    <div id="resumeSubSection">
                        <DraggableBlocksC
                            draggableBlocks={draggableBlocks[1]}
                            availableBlocks={SubSectionBlocks}
                            firstItemCtx={{ topMargin: 0, header_style }}
                            otherItemCtx={{ topMargin: subsectionTopMargin, header_style }}
                        />
                    </div>
                </div>
            </div>
        </PageContext.Provider>
    );
};

export default memo(templateWrap(Template));
