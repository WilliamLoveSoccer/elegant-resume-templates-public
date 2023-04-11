import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';

const HeadingC = ({ content, actionCreator }) => {
    const { header_style } = useContext(PageContext);

    const { h_position, b_border, t_border } = header_style;
    let style = h_position + ' ' + b_border + ' ' + t_border + ' ';

    return (
        <div className="er-grid er-grid-cols-5 er-gap-4 er-align-center er-mb-2" style={{ backgroundColor: '#e3e3e3' }}>
            <div
                className={style + ' er-text-lg er-py-1 er-font-bold er-text-center er-col-span-1'}
                style={{
                    color: '#ffffff',
                    backgroundColor: '#6e6e6e',
                }}
            >
                <ContentEditableEle html={content} actionCreator={actionCreator} />
            </div>
        </div>
    );
};

export default memo(HeadingC);
