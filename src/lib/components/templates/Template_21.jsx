import React, { memo, useEffect, useRef } from 'react';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import EducationBlockF from '../blocks/Education/EducationBlockF';
import { getMainSectionTopMargin, getSubSectionTopMargin } from '../util/utils';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import SummaryBlockA from '../blocks/Objective/ObjectiveBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import Hero01 from '../blocks/Hero/Hero01';
import templateWrap from '../hoc/templateWrap';
import SummaryBlockD from '../blocks/Objective/SummaryBlockD';
import DraggableBlocksC from '../share/DraggableBlocks/DraggableBlocksC';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockA from '../blocks/AcademicExp/AcademicExpBlockA';

const header_style = {
    h_position: '',
    b_border: '',
    t_border: 'er-border-t-2',
};

const header_style_2 = {
    h_position: '',
    b_border: '',
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
        <>
            <div id="HeadingBlock" className="er-pb-5">
                <div className="er-border-b-2 er-border-black">
                    <Hero01 />
                    <SummaryBlockD firstTopMargin={0} />
                </div>
            </div>
            <div className="er-grid er-grid-cols-7 er-gap-0">
                <div className="er-col-span-5 er-pr-3">
                    <div id="resumeMainSection">
                        <DraggableBlocksC
                            draggableBlocks={draggableBlocks[0]}
                            availableBlocks={MainSectionBlocks}
                            firstItemCtx={{ topMargin, header_style: header_style_2 }}
                            otherItemCtx={{ topMargin, header_style }}
                        />
                    </div>
                </div>
                <div className="er-col-span-2 er-pl-3 er-border-l-2 er-border-black">
                    <div id="resumeSubSection">
                        <DraggableBlocksC
                            draggableBlocks={draggableBlocks[1]}
                            availableBlocks={SubSectionBlocks}
                            firstItemCtx={{ topMargin: subsectionTopMargin, header_style: header_style_2 }}
                            otherItemCtx={{ topMargin: subsectionTopMargin, header_style }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(templateWrap(Template));
