import React, { memo, useEffect, useRef } from 'react';
import PageContext from '../../contexts/PageContext';
import EducationBlockD from '../blocks/Education/EducationBlockD';
import Hero01 from '../blocks/Hero/Hero01';
import SummaryBlockA from '../blocks/Objective/ObjectiveBlockA';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import ExperienceBlockD from '../blocks/Work/ExperienceBlockD';
import ProjectsBlockD from '../blocks/Projects/ProjectsBlockD';
import { getMainSectionTopMargin_OneColum } from '../util/utils';
import templateWrap from '../hoc/templateWrap';
import DraggableBlocksA from '../share/DraggableBlocks/DraggableBlocksA';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockD from '../blocks/AcademicExp/AcademicExpBlockD';

const MainSectionBlocks = {
    summary: SummaryBlockA,
    experience: ExperienceBlockD,
    education: EducationBlockD,
    project: ProjectsBlockD,
    academicExperience: AcademicExpBlockD,
    awards: AwardsBlock01,
    skill: SkillsBlockA,
};

const header_style = {
    h_position: 'er-text-center',
    b_border: 'er-border-b-2',
    t_border: '',
};

const Template_3 = (props) => {
    const { resumeData, onUpdate } = props;
    const { fitToOnePage, topMargin, draggableBlocks, setTopMargin } = props;
    const mounted = useRef();

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            let newTopmargin = 0;
            if (fitToOnePage) {
                newTopmargin = getMainSectionTopMargin_OneColum(topMargin);
            }
            setTopMargin(newTopmargin);
        }
    }, [fitToOnePage]);

    return (
        <PageContext.Provider value={{ topMargin, header_style, resumeData, onUpdate }}>
            <div id="resumeMainSection">
                <Hero01 />
                <DraggableBlocksA draggableBlocks={draggableBlocks} availableBlock={MainSectionBlocks} />
            </div>
        </PageContext.Provider>
    );
};

export default memo(templateWrap(Template_3));
