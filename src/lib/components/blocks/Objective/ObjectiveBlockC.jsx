import React, { memo } from 'react';
import HeadingC from '../../share/Heading/HeadingC';
import TextEditor from '../../share/TextEditor';
import summaryBlockHoc from './ObjectiveBlockHoc';

const ObjectiveBlockC = ({ heading, body, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingC
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'summary', action: 'updateSummaryHeading', payload: newHeading })}
            />
            <div className="er-text-sm er-pb-2">
                <TextEditor textEditorHTML={body} actionCreator={(body) => ({ entity: 'summary', action: 'updateSummaryBody', payload: body })} />
            </div>
        </div>
    );
};

export default summaryBlockHoc(memo(ObjectiveBlockC));
