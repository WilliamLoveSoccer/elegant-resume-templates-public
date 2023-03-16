import React, { memo, useEffect, useRef } from 'react';
import { getMainSectionTopMargin, getSubSectionTopMargin } from '../util/utils';
import PageContext from '../../contexts/PageContext';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import Hero02 from '../blocks/Hero/Hero02';
import EducationBlockF from '../blocks/Education/EducationBlockF';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import SummaryBlockA from '../blocks/Objective/ObjectiveBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import templateWrap from '../hoc/templateWrap';
import DraggableBlocksB from '../share/DraggableBlocks/DraggableBlocksB';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockA from '../blocks/AcademicExp/AcademicExpBlockA';
import Hero102 from '../blocks/Hero/Hero102';

const header_style = {
    h_position: '',
    b_border: 'er-border-b-2',
    t_border: '',
};

const MainSectionBlocks = {
    summary: SummaryBlockA,
    experience: ExperienceBlockA,
    education: EducationBlockA,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    awards: AwardsBlock01,
};
const SubSectionBlocks = {
    summary: SummaryBlockA,
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
        <PageContext.Provider value={{ header_style }}>
            <div id="HeadingBlock">
                <Hero102 />
            </div>
            <div className="er-grid er-grid-cols-4 er-gap-8">
                <div className="er-col-span-1">
                    <div id="resumeSubSection">
                        <PageContext.Provider
                            value={{
                                topMargin: subsectionTopMargin,
                                header_style,
                            }}
                        >
                            <DraggableBlocksB draggableBlocks={draggableBlocks[0]} availableBlocks={SubSectionBlocks} />
                        </PageContext.Provider>
                    </div>
                </div>
                <div className="er-col-span-3">
                    <div id="resumeMainSection">
                        <PageContext.Provider value={{ topMargin, header_style }}>
                            <DraggableBlocksB draggableBlocks={draggableBlocks[1]} availableBlocks={MainSectionBlocks} />
                        </PageContext.Provider>
                    </div>
                </div>
            </div>
        </PageContext.Provider>
    );
};

export default memo(templateWrap(Template));
