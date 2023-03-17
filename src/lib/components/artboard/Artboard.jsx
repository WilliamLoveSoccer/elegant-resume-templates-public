import React, { memo, useEffect, useRef } from 'react';
import '../../styles/global.css';
import '../../styles/tailwind.css';
import '../../i18n';
import fontSizeOptions from '../../data/fontSizeOptions';
import { scaler } from '../util/utils';
import { ResumeProvider } from '../../contexts/ResumeContext';
import i18next from 'i18next';

const Artboard = ({ resumeData, onUpdate, config = {}, children = <div></div> }) => {
    const {
        userSettings: { userLanguage },
        metadata: { fontSize },
    } = resumeData;
    i18next.changeLanguage(userLanguage);
    const artiboard = useRef();

    useEffect(() => {
        if (!fontSize) {
            fontSize = 12;
        }
        for (const [key, sizeDefault] of Object.entries(fontSizeOptions)) {
            artiboard.current.style.setProperty(key, `${Math.floor(scaler(fontSize) * sizeDefault * 12)}px`);
        }
    }, [fontSize]);

    return (
        <div ref={artiboard}>
            <div id="er-internal-toolbar"></div>
            <ResumeProvider resumeData={resumeData} onUpdate={onUpdate} config={config}>
                {children}
            </ResumeProvider>
        </div>
    );
};

export default memo(Artboard);
