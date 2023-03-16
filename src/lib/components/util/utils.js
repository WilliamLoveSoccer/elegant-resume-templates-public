//one column template
//one column topMargin is different from two column is becasue one column template count header in the mainSection while two column templates don't
export const getMainSectionTopMargin_OneColum = (topMargin) => {
    let mainSection = document.getElementById('resumeMainSection');

    let mainSectionHeight = mainSection && mainSection.clientHeight;
    let mainSectionItemsNum = mainSection && mainSection.children.length;

    // let container = mainSection && mainSection.parentNode;

    let container = document.getElementById('resumeContentContainer');
    let containerHeight = container && container.clientHeight;
    console.log(mainSectionHeight, containerHeight, mainSectionItemsNum);

    if (mainSectionHeight && mainSectionItemsNum > 1) {
        let space = containerHeight - mainSectionHeight;
        // console.log(space, containerHeight, mainSectionHeight);
        let newTopMargin = Math.floor(space / (mainSectionItemsNum - 1)) + topMargin;
        if (newTopMargin > 0) {
            return newTopMargin;
        } else {
            return 0;
        }
    }
};

//two column template
export const getMainSectionTopMargin = (topMargin, resetFirstTopMargin = true) => {
    let { containerHeight, headerBlockHeight } = getContainerAndHeadHeight();

    let mainSection = document.getElementById('resumeMainSection');
    let mainSectionHeight = mainSection && mainSection.clientHeight; //client height will not count the first topMargin
    let mainSectionItemsNum = mainSection && mainSection.children.length;
    let itemsWithTopMargin = mainSectionItemsNum - 1;
    if (!resetFirstTopMargin) {
        mainSectionHeight = mainSection && mainSection.clientHeight + topMargin;
        itemsWithTopMargin = mainSectionItemsNum;
    }
    let newTopMargin = 0;
    // console.log(mainSection, mainSectionItemsNum);
    if (mainSectionHeight && mainSectionItemsNum > 1) {
        let space = containerHeight - headerBlockHeight - mainSectionHeight;
        // console.log(space, containerHeight, mainSectionHeight, headerBlockHeight, topMargin);

        newTopMargin = Math.floor(space / itemsWithTopMargin) + topMargin;
        // console.log(itemsWithTopMargin);
    }
    if (newTopMargin > 0) {
        return newTopMargin;
    } else {
        return 0;
    }
};

export const getSubSectionTopMargin = (topMargin, subsectionTopMargin, resetFirstTopMargin = true) => {
    let { containerHeight, headerBlockHeight } = getContainerAndHeadHeight();

    let subSection = document.getElementById('resumeSubSection');
    let subSectionHeight = subSection && subSection.clientHeight; //clientheight will not count the first topMargin (However, first topMargin is set to 0...)
    let subSectionItemsNum = subSection && subSection.children.length;
    let itemsWithTopMargin = subSectionItemsNum - 1;
    // console.log(subSectionHeight, subSectionItemsNum);
    if (!resetFirstTopMargin) {
        subSectionHeight = subSection !== undefined && subSection.clientHeight + subsectionTopMargin;
        itemsWithTopMargin = subSectionItemsNum;
        // console.log(subsectionTopMargin);
    }

    if (subSectionHeight !== undefined && subSectionItemsNum > 0) {
        let newSubSectionHeight = subSectionHeight + subSectionItemsNum * topMargin;
        // console.log(
        //   newSubSectionHeight,
        //   subSectionHeight,
        //   subSectionItemsNum,
        //   topMargin
        // );
        if (newSubSectionHeight < containerHeight - headerBlockHeight) {
            return topMargin;
        } else {
            let space = containerHeight - headerBlockHeight - subSectionHeight;
            // console.log(space, containerHeight, subSectionHeight, topMargin);
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
    let headerBlock = document.getElementById('HeadingBlock');
    let headerBlockHeight = headerBlock && headerBlock.clientHeight;
    let container = document.getElementById('resumeContentContainer');
    let containerHeight = container && container.clientHeight;
    return { containerHeight, headerBlockHeight };
};

export const scaler = (value) => {
    const logMax = 2.5;
    const logMin = 0.6;
    const steps = 20;
    const logRange = logMax / logMin;
    const logStepSize = logRange ** (1 / steps);
    const min = 0;

    return logStepSize ** (value - min) * logMin;
};
