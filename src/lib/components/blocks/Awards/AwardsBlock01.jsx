import React, { memo } from 'react';
import TextEditor from '../../share/TextEditor';
import HeadingA from '../../share/Heading/HeadingA';
import AwardBlockHoc from './AwardsBlockHoc';

const AwardBlock01 = ({ heading, body, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(newAward) => ({ entity: 'award', action: `updateAwardHeading`, payload: newAward })} />
            <div className="er-text-sm er-pb-2">
                <TextEditor textEditorHTML={body} actionCreator={(newAward) => ({ entity: 'award', action: `updateAwardBody`, payload: newAward })} />
            </div>
        </div>
    );
};

export default memo(AwardBlockHoc(AwardBlock01));
