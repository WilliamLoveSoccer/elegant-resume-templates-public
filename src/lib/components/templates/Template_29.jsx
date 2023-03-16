import React, { memo, useEffect, useRef } from 'react';
import SkillsBlockA from '../blocks/Skills/SkillsBlockA';
import EducationBlockF from '../blocks/Education/EducationBlockF';
import EducationBlockA from '../blocks/Education/EducationBlockA';
import ObjectiveBlockA from '../blocks/Objective/ObjectiveBlockA';
import ExperienceBlockA from '../blocks/Work/ExperienceBlockA';
import ProjectsBlockA from '../blocks/Projects/ProjectsBlockA';
import templateWrap from '../hoc/templateWrap';
import ContactBlock02 from '../blocks/Contact/ContactBlock02';
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

const header_style_2 = {
    h_position: '',
    b_border: '',
    t_border: '',
};

const MainSectionBlocks = {
    summary: ObjectiveBlockA,
    experience: ExperienceBlockA,
    education: EducationBlockA,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    award: AwardsBlock01,
};
const SubSectionBlocks = {
    summary: ObjectiveBlockA,
    experience: ExperienceBlockA,
    education: EducationBlockF,
    project: ProjectsBlockA,
    academicExperience: AcademicExpBlockA,
    skill: SkillsBlockA,
    award: AwardsBlock01,
};

const Template = (props) => {
    const { paperLength, fitToOnePage, topMargin, subsectionTopMargin, draggableBlocks, setTopMargin, setSubsectionTopMargin } = props;

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

    const getMainSectionTopMargin = (topMargin) => {
        let { containerHeight, headerBlockHeight } = getContainerAndHeadHeight();

        let mainSection = document.getElementById('resumeMainSection');
        let mainSectionHeight = mainSection && mainSection.clientHeight; //client height will not count the first topMargin
        let mainSectionItemsNum = mainSection && mainSection.children.length;
        let itemsWithTopMargin = mainSectionItemsNum - 1;
        let newTopMargin = 0;
        if (mainSectionHeight && mainSectionItemsNum > 1) {
            let space = containerHeight - headerBlockHeight - mainSectionHeight;
            newTopMargin = Math.floor(space / itemsWithTopMargin) + topMargin;
        }
        if (newTopMargin > 0) {
            return newTopMargin;
        } else {
            return 0;
        }
    };

    const getSubSectionTopMargin = (topMargin, subsectionTopMargin) => {
        let { containerHeight, headerBlockHeight } = getContainerAndHeadHeight();

        let subSection = document.getElementById('resumeSubSection');
        let subSectionHeight = subSection && subSection.clientHeight; //clientheight will not count the first topMargin (However, first topMargin is set to 0...)
        let subSectionItemsNum = subSection && subSection.children.length;
        let itemsWithTopMargin = subSectionItemsNum - 1;

        if (subSectionHeight !== undefined && subSectionItemsNum > 0) {
            let newSubSectionHeight = subSectionHeight + subSectionItemsNum * topMargin;
            if (newSubSectionHeight < containerHeight - headerBlockHeight) {
                return topMargin;
            } else {
                let space = containerHeight - headerBlockHeight - subSectionHeight;
                let newSubsectionTopMargin = Math.floor(space / itemsWithTopMargin) + subsectionTopMargin;
                if (newSubsectionTopMargin > 0) {
                    return newSubsectionTopMargin;
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    };

    const getContainerAndHeadHeight = () => {
        let container = document.getElementById('resumeContentContainer');
        let containerHeight = container && container.clientHeight - 48; //padding is 0 in page element.
        return { containerHeight, headerBlockHeight: 0 };
    };

    return (
        <div>
            <div className="er-grid er-grid-cols-11 er-gap-0" style={{ minHeight: paperLength }}>
                <div className="er-col-span-4 er-pr-6 er-bg-gray-200">
                    <div className="er-h-full" style={{ padding: '24px 0px 24px 36px' }}>
                        <div className="er-h-full">
                            <div id="resumeSubSection">
                                <p className="er-text-4xl er-pb-8">
                                    <ContentEditableEle
                                        html={`${contact.name}`}
                                        actionCreator={(newName) => ({ entity: 'contact', action: 'updateContactName', payload: newName })}
                                    />
                                </p>
                                <ContactBlock02 topMargin={subsectionTopMargin} />

                                <DraggableBlocksC
                                    draggableBlocks={draggableBlocks[0]}
                                    availableBlocks={SubSectionBlocks}
                                    firstItemCtx={{ topMargin: subsectionTopMargin, header_style }}
                                    otherItemCtx={{ topMargin: subsectionTopMargin, header_style }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="er-col-span-7 er-pl-5">
                    <div style={{ padding: '24px 36px 24px 0px' }}>
                        <div id="resumeMainSection">
                            <DraggableBlocksC
                                draggableBlocks={draggableBlocks[1]}
                                availableBlocks={MainSectionBlocks}
                                firstItemCtx={{ topMargin: 0, header_style: header_style_2 }}
                                otherItemCtx={{ topMargin, header_style }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(templateWrap(Template, true));
