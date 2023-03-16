import React, { useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { useEduState, useMetadateState } from '../../../hooks/useStoreState';

const educationBlockHOC = (EducationBlock) => {
    const WrappedComponent = (props) => {
        const { heading, visible, items } = useEduState();
        const { colors } = useMetadateState();
        const { topMargin } = useContext(PageContext);
        const { firstTopMargin } = props;
        const marginTop = firstTopMargin !== undefined ? firstTopMargin : topMargin;

        if (visible === true && items.length > 0) {
            return <EducationBlock heading={heading} visible={visible} items={items} marginTop={marginTop} colors={colors} {...props} />;
        } else {
            return <></>;
        }
    };
    return WrappedComponent;
};

export default educationBlockHOC;
