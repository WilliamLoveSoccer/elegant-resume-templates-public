import React, { memo } from 'react';
import TextEditor from '../../share/TextEditor';
import HeadingB from '../../share/Heading/HeadingB';
import skillBlockHoc from './SkillBlockHoc';

const SkillsBlockB = ({ heading, body, marginTop, colors }) => {
    return (
        <div style={{ marginTop: marginTop + 'px', borderTopColor: colors.primary }} className="er-grid er-grid-cols-5 er-gap-4 er-border-t-2">
            <HeadingB content={heading} actionCreator={(heading) => ({ entity: 'skill', action: 'updateSkillHeading', payload: heading })} />
            <div className="er-text-sm er-py-2 er-col-span-4">
                <TextEditor textEditorHTML={body} actionCreator={(body) => ({ entity: 'skill', action: 'updateSkillBody', payload: body })} />
            </div>
        </div>
    );
};

export default skillBlockHoc(memo(SkillsBlockB));
