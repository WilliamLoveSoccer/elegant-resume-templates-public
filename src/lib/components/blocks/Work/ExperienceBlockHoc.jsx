import React, { useContext, useMemo } from 'react';
import PageContext from '../../../contexts/PageContext';
import { useExpState, useMetadateState } from '../../../hooks/useStoreState';

const experienceBlockHoc = (ExperienceBlock) => {
    const WrappedComponent = (props) => {
        // const { firstTopMargin } = props;
        const { visible, heading, items } = useExpState();
        const { colors } = useMetadateState();
        const { topMargin } = useContext(PageContext);
        // const marginTop = firstTopMargin !== undefined ? firstTopMargin : topMargin;
        // console.log(topMargin);

        return useMemo(() => {
            if (visible === true && items.length > 0) {
                return <ExperienceBlock heading={heading} visible={visible} items={items} marginTop={topMargin} colors={colors} />;
            } else {
                return <></>;
            }
        }, [visible, heading, JSON.stringify(items), topMargin]);
    };
    return WrappedComponent;
};

export default experienceBlockHoc;
