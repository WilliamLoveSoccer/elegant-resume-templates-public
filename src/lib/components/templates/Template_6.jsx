import React, { memo, useEffect, useRef } from 'react';
import PageContext from '../../contexts/PageContext';
import Hero01 from '../blocks/Hero/Hero01';
import SummaryBlockC from '../blocks/Objective/ObjectiveBlockC';
import EducationBlockC from '../blocks/Education/EducationBlockC';
import ExperienceBlockC from '../blocks/Work/ExperienceBlockC';
import ProjectsBlockC from '../blocks/Projects/ProjectsBlockC';
import { getMainSectionTopMargin_OneColum } from '../util/utils';
import templateWrap from '../hoc/templateWrap';
import SkillsBlockC from '../blocks/Skills/SkillsBlockC';
import DraggableBlocksA from '../share/DraggableBlocks/DraggableBlocksA';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockC from '../blocks/AcademicExp/AcademicExpBlockC';

const MainSectionBlocks = {
    summary: SummaryBlockC,
    experience: ExperienceBlockC,
    education: EducationBlockC,
    project: ProjectsBlockC,
    academicExperience: AcademicExpBlockC,

    awards: AwardsBlock01,
    // certifications: CertificationsA,
    skill: SkillsBlockC,
    // hobbies: HobbiesA,
    // languages: LanguagesA,
    // references: ReferencesA,
};

const header_style = {
    h_position: '',
    b_border: '',
    t_border: '',
};

const Template = (props) => {
    const { data, fitToOnePage, topMargin, draggableBlocks, setTopMargin } = props;
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
        <PageContext.Provider value={{ data, topMargin, header_style, heading: Hero01 }}>
            <div id="resumeMainSection">
                <Hero01 />
                <DraggableBlocksA draggableBlocks={draggableBlocks} availableBlock={MainSectionBlocks} />
            </div>
        </PageContext.Provider>
    );
};

export default memo(templateWrap(Template));
