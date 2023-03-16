import React, { memo, useEffect, useRef } from 'react';
import PageContext from '../../contexts/PageContext';
import Hero01 from '../blocks/Hero/Hero01';
import SummaryBlockB from '../blocks/Objective/ObjectiveBlockB';
import EducationBlockB from '../blocks/Education/EducationBlockB';
import ExperienceBlockB from '../blocks/Work/ExperienceBlockB';
import ProjectsBlockB from '../blocks/Projects/ProjectsBlockB';
import { getMainSectionTopMargin_OneColum } from '../util/utils';
import templateWrap from '../hoc/templateWrap';
import SkillsBlockB from '../blocks/Skills/SkillsBlockB';
import DraggableBlocksA from '../share/DraggableBlocks/DraggableBlocksA';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import AcademicExpBlockB from '../blocks/AcademicExp/AcademicExpBlockB';

const MainSectionBlocks = {
    summary: SummaryBlockB,
    experience: ExperienceBlockB,
    education: EducationBlockB,
    project: ProjectsBlockB,
    academicExperience: AcademicExpBlockB,

    awards: AwardsBlock01,
    // certifications: CertificationsB,
    skill: SkillsBlockB,
    // hobbies: HobbiesB,
    // languages: LanguagesB,
    // references: ReferencesB,
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
                newTopmargin = getMainSectionTopMargin_OneColum(topMargin * 2);
            }
            setTopMargin(newTopmargin / 2);
        }
    }, [fitToOnePage]);

    // useEffect(() => {
    //     let newTopmargin = 0;
    //     if (fitToOnePage) {
    //         newTopmargin = getMainSectionTopMargin_OneColum(topMargin * 2);
    //     }
    //     setTopMargin(newTopmargin / 2);
    // }, [fitToOnePage]);

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
