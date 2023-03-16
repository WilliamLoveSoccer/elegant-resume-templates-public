import React, { memo, useEffect, useRef } from 'react';
import PageContext from '../../contexts/PageContext';
import Hero01 from '../blocks/Hero/Hero01';
import { getMainSectionTopMargin_OneColum } from '../util/utils';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import SummaryBlockA from '../blocks/Objective/ObjectiveBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import templateWrap from '../hoc/templateWrap';
import DraggableBlocksA from '../share/DraggableBlocks/DraggableBlocksA';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockA from '../blocks/AcademicExp/AcademicExpBlockA';

const MainSectionBlocks = {
    summary: SummaryBlockA,
    experience: ExperienceBlockA,
    education: EducationBlockA,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    awards: AwardsBlock01,
    // certifications: CertificationsA,
    // hobbies: HobbiesA,
    // languages: LanguagesA,
    // references: ReferencesA,
};

const header_style = {
    h_position: '',
    b_border: 'er-border-b-2',
    t_border: '',
};

const Template = (props) => {
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
        <PageContext.Provider value={{ topMargin, header_style, heading: Hero01 }}>
            <div id="resumeMainSection">
                <Hero01 />
                <DraggableBlocksA draggableBlocks={draggableBlocks} availableBlock={MainSectionBlocks} />
            </div>
        </PageContext.Provider>
    );
};

export default memo(templateWrap(Template));
