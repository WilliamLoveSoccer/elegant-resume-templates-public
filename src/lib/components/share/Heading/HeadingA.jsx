import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import { useMetadateState } from '../../../hooks/useStoreState';

const HeadingA = ({ content, actionCreator }) => {
    const { colors } = useMetadateState();
    const { header_style } = useContext(PageContext);

    const { h_position, b_border, t_border } = header_style;
    let style = h_position + ' ' + b_border + ' ' + t_border + ' ';

    return (
        <div className={style + ' er-text-lg  er-font-bold'} style={{ borderColor: colors.primary }}>
            <ContentEditableEle html={content} style={{ color: colors.primary }} actionCreator={actionCreator} />
        </div>
    );
};

export default memo(HeadingA);
