import React, { useState } from 'react';
import { TemplateContainer, Template3 } from './lib/index';
// import { TemplateContainer, Template3  } from '@williamlovesoccer/elegant-resume-templates';
import state from './initialState';
// import './lib/i18n/index';

const App = () => {
    const [initalState, setState] = useState(state.initState);

    return (
        <div>
            <div style={{ transform: 'scale(1)', transformOrigin: 'top left', paddingTop: 40, marginLeft: 100, position: 'relative' }}>
                <TemplateContainer
                    resumeData={initalState}
                    config={{ noUpdate: false, toolbar: { showToolbarOnFocus: true }, overflowIndicator: { showOverflowIndicator: true } }}
                    onUpdate={{
                        summary: {
                            updateSummaryBody: (newBody) => {
                                const copy = { ...state.initState };
                                copy.summary.body = newBody;
                                setState(copy);
                            },
                        },
                    }}
                >
                    <Template3 />
                </TemplateContainer>
            </div>
        </div>
    );
};

export default App;
