import React, { memo } from 'react';
import HeadingA from '../../share/Heading/HeadingA';
import TextEditor from '../../share/TextEditor';
import summaryBlockHoc from './ObjectiveBlockHoc';

const ObjectiveA = ({ heading, body, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'summary', action: 'updateSummaryHeading', payload: newHeading })}
            />
            <div className="er-text-sm er-pb-2 er-pt-1">
                <TextEditor textEditorHTML={body} actionCreator={(body) => ({ entity: 'summary', action: 'updateSummaryBody', payload: body })} />
            </div>
        </div>
    );
};

export default summaryBlockHoc(memo(ObjectiveA));
