import React, { useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { useMetadateState, useSkillState } from '../../../hooks/useStoreState';

const skillBlockHoc = (SkillBlock) => {
    const WrappedComponent = (props) => {
        const { firstTopMargin } = props;
        const { heading, visible, body } = useSkillState();
        const { colors } = useMetadateState();
        const { topMargin } = useContext(PageContext);

        const marginTop = firstTopMargin !== undefined || topMargin;
        if (visible) return <SkillBlock heading={heading} body={body} marginTop={marginTop} colors={colors} {...props} />;
        else return <></>;
    };
    return WrappedComponent;
};

export default skillBlockHoc;
