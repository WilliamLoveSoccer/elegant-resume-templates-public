import React, { memo, useEffect, useRef } from 'react';
import PageContext from '../../contexts/PageContext';
import CertificationsA from '../blocks/Certifications/CertificationsA';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import Hero02 from '../blocks/Hero/Hero02';
import HobbiesA from '../blocks/Hobbies/HobbiesA';
import LanguagesA from '../blocks/Languages/LanguagesA';
import SummaryBlockA from '../blocks/Objective/ObjectiveBlockA';
import ReferencesA from '../blocks/References/ReferencesA';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import { getMainSectionTopMargin_OneColum } from '../util/utils';
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
    awards: AwardsBlock01,
    certifications: CertificationsA,
    skill: SkillsBlockA,
    hobbies: HobbiesA,
    languages: LanguagesA,
    references: ReferencesA,
};

const header_style = {
    h_position: 'er-text-left',
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
                <Hero02 />
                <DraggableBlocksA draggableBlocks={draggableBlocks} availableBlock={MainSectionBlocks} />
            </div>
        </PageContext.Provider>
    );
};

export default memo(templateWrap(Template_3));
