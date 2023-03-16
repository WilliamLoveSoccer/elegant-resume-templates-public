import React, { memo } from 'react';
import HeadingB from '../../share/Heading/HeadingB';
import TextEditor from '../../share/TextEditor';
import summaryBlockHoc from './ObjectiveBlockHoc';

const ObjectiveB = ({ heading, body, marginTop, colors }) => {
    return (
        <div
            style={{ marginTop: marginTop + 'px', paddingTop: marginTop + 'px', borderTopColor: colors.primary }}
            className="er-grid er-grid-cols-5 er-gap-4 er-border-t-2"
        >
            <HeadingB
                content={heading}
                actionCreator={(newHeading) => ({ entity: 'summary', action: 'updateSummaryHeading', payload: newHeading })}
            />
            <div className="er-text-sm er-col-span-4 er-py-2">
                <TextEditor textEditorHTML={body} actionCreator={(body) => ({ entity: 'summary', action: 'updateSummaryBody', payload: body })} />
            </div>
        </div>
    );
};

export default summaryBlockHoc(memo(ObjectiveB));
