import React, { memo } from 'react';
import TextEditor from '../../share/TextEditor';
import HeadingA from '../../share/Heading/HeadingA';
import skillBlockHoc from './SkillBlockHoc';

const SkillsBlockA = ({ heading, body, marginTop }) => {
    return (
        <div style={{ marginTop: marginTop + 'px' }}>
            <HeadingA content={heading} actionCreator={(heading) => ({ entity: 'skill', action: 'updateSkillHeading', payload: heading })} />
            <div className="er-text-sm er-pb-2">
                <TextEditor textEditorHTML={body} actionCreator={(body) => ({ entity: 'skill', action: 'updateSkillBody', payload: body })} />
            </div>
        </div>
    );
};

export default skillBlockHoc(SkillsBlockA);
