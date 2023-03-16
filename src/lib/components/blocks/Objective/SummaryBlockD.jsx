import React, { memo } from 'react';
import TextEditor from '../../share/TextEditor';
import summaryBlockHoc from './ObjectiveBlockHoc';

const ObjectiveBlockC = ({ body, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <div className="er-text-sm er-pb-2">
                <TextEditor
                    textEditorHTML={body}
                    actionCreator={(newBody) => ({ entity: 'summary', action: 'updateSummaryBody', payload: newBody })}
                />
            </div>
        </div>
    );
};

export default summaryBlockHoc(memo(ObjectiveBlockC));
