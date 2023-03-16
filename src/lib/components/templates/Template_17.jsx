import React, { memo, useEffect, useRef } from 'react';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import EducationBlockF from '../blocks/Education/EducationBlockF';
import { getMainSectionTopMargin, getSubSectionTopMargin } from '../util/utils';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import ObjectiveBlockA from '../blocks/Objective/ObjectiveBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import ContactBlockB from '../blocks/Contact/ContactBlockB';
import templateWrap from '../hoc/templateWrap';
import ContentEditableEle from '../share/ContentEditableEle/ContentEditableEle';
import DraggableBlocksC from '../share/DraggableBlocks/DraggableBlocksC';
import AwardsBlock01 from '../blocks/Awards/AwardsBlock01';
import { useContactState } from '../../hooks/useStoreState';
import AcademicExpBlockA from '../blocks/AcademicExp/AcademicExpBlockA';

const header_style = {
    h_position: '',
    b_border: '',
    t_border: '',
};

const MainSectionBlocks = {
    summary: ObjectiveBlockA,
    contact: ContactBlockB,
    experience: ExperienceBlockA,
    education: EducationBlockA,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    awards: AwardsBlock01,
};
const SubSectionBlocks = {
    summary: ObjectiveBlockA,
    contact: ContactBlockB,
    experience: ExperienceBlockA,
    education: EducationBlockF,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    awards: AwardsBlock01,
};

const Template = (props) => {
    const { fitToOnePage, topMargin, subsectionTopMargin, draggableBlocks, setTopMargin, setSubsectionTopMargin } = props;

    const contact = useContactState();
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
                <p className="er-text-center er-text-4xl er-py-10">
                    <ContentEditableEle
                        html={`${contact.name}`}
                        actionCreator={(newName) => ({ entity: 'contact', action: 'updateContactName', payload: newName })}
                    />
                </p>
            </div>
            <div className="er-grid er-grid-cols-10 er-gap-0">
                <div className="er-col-span-3 er-pr-8 er-border-r-2 er-border-black">
                    <div id="resumeSubSection">
                        <DraggableBlocksC
                            draggableBlocks={draggableBlocks[0]}
                            availableBlocks={SubSectionBlocks}
                            firstItemCtx={{ topMargin: 0, header_style }}
                            otherItemCtx={{ topMargin: subsectionTopMargin, header_style }}
                        />
                    </div>
                </div>
                <div className="er-col-span-7 er-pl-5">
                    <div id="resumeMainSection">
                        <DraggableBlocksC
                            draggableBlocks={draggableBlocks[1]}
                            availableBlocks={MainSectionBlocks}
                            firstItemCtx={{ topMargin: 0, header_style }}
                            otherItemCtx={{ topMargin, header_style }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(templateWrap(Template));
