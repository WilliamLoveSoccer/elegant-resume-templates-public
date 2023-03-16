import React, { useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { useMetadateState, useAcademicExperienceState } from '../../../hooks/useStoreState';

const academicExpBlockHoc = (AcademicExpBlock) => {
    const WrappedComponent = (props) => {
        const { firstTopMargin } = props;
        const { heading, visible, items } = useAcademicExperienceState();
        const { colors } = useMetadateState();
        const { topMargin } = useContext(PageContext);
        const marginTop = firstTopMargin !== undefined ? firstTopMargin : topMargin;

        if (visible === true && items.length > 0) {
            return <AcademicExpBlock heading={heading} visible={visible} items={items} marginTop={marginTop} colors={colors} {...props} />;
        } else {
            return <></>;
        }
    };
    return WrappedComponent;
};

export default academicExpBlockHoc;
