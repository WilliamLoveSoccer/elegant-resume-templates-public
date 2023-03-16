import React, { useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { useMetadateState, useProjectState } from '../../../hooks/useStoreState';

const projectBlockHoc = (ProjectBlock) => {
    const WrappedComponent = (props) => {
        const { firstTopMargin } = props;
        const { heading, visible, items } = useProjectState();
        const { colors } = useMetadateState();
        const { topMargin } = useContext(PageContext);
        const marginTop = firstTopMargin !== undefined ? firstTopMargin : topMargin;

        if (visible === true && items.length > 0) {
            return <ProjectBlock heading={heading} visible={visible} items={items} marginTop={marginTop} colors={colors} {...props} />;
        } else {
            return <></>;
        }
    };
    return WrappedComponent;
};

export default projectBlockHoc;
