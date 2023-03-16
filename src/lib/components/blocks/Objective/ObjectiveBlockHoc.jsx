import React, { useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { useMetadateState, useSummaryState } from '../../../hooks/useStoreState';

const summaryBlockHoc = (SummaryBlock) => {
    const WrappedComponent = (props) => {
        const { firstTopMargin } = props;
        const { heading, visible, body } = useSummaryState();
        const { colors } = useMetadateState();
        const { topMargin } = useContext(PageContext);

        const marginTop = firstTopMargin !== undefined || topMargin;
        if (visible) return <SummaryBlock heading={heading} body={body} marginTop={marginTop} colors={colors} {...props} />;
        else return <></>;
    };
    return WrappedComponent;
};

export default summaryBlockHoc;
