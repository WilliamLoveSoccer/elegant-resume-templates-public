import React, { useEffect, useState } from 'react';
import PaperSizeOptions from '../../data/paperSizeOption';
import { useMetadateState, useUserSettingsState } from '../../hooks/useStoreState';
import OverFlowIndicator from '../share/OverflowIndicator';
import { useOverflowIndicatorConfig } from '../../hooks/useConfig';
import styles from './templateWrap.module.css';
import { useTranslation } from 'react-i18next';
import { useStoreDispatch } from '../../hooks/useStoreDispatch';

const templateWrap = (Component, withoutPadding = false) => {
    const WrappedComponent = (props) => {
        const dispatch = useStoreDispatch();
        const { i18n } = useTranslation();

        const { font, paperSize, fitToOnePage, fitToOnePageMargin, layout } = useMetadateState();
        const { userLanguage } = useUserSettingsState();
        const { showOverflowIndicator } = useOverflowIndicatorConfig();
        const { draggableBlocks } = layout;
        const { mainSectionTopMargin, subSectionTopMargin } = fitToOnePageMargin;

        const [paperWidth, setPaperWidth] = useState('0px');
        const [paperLength, setPaperLength] = useState('0px');

        const [loading, setLoading] = useState(true);

        useEffect(() => {
            if (typeof onLoad === 'function') onLoad();
            setLoading(false);
        }, []);

        useEffect(() => {
            i18n.changeLanguage(userLanguage);
        }, [userLanguage]);

        useEffect(() => {
            const [paperSizeOption] = PaperSizeOptions.filter((paperSizeOption) => paperSizeOption.name === paperSize);
            const { width, length } = paperSizeOption;
            setPaperWidth(width);
            setPaperLength(length);
        }, [paperSize]);

        useEffect(() => {
            const paperLengthInPx = paperLength.substring(0, paperLength.length - 2);
            document.documentElement.style.setProperty('--content-height', `${paperLengthInPx - 2 * 24}px`);
        }, [paperLength]);

        const onSetMainSectionTopMargin = (newMargin) => {
            dispatch({ entity: 'metadata', action: 'updateMainSectionTopMargin', payload: newMargin });
        };
        const onSetSubSectionTopMargin = (newMargin) => {
            dispatch({ entity: 'metadata', action: 'updateSubSectionTopMargin', payload: newMargin });
        };

        const getContentHeight = (paperLength) => {
            const paperLengthInPx = paperLength.substring(0, paperLength.length - 2);
            return `${paperLengthInPx - 2 * 24}px`;
        };

        const getPagePadding = (withoutPadding) => {
            if (withoutPadding) return '0';
            else return '24px 36px 24px 36px';
        };

        return (
            <div
                className={styles.templateBorder}
                style={{
                    width: paperWidth,
                    minWidth: '793px',
                    minHeight: paperLength,
                }}
            >
                {loading ? (
                    <div className={styles.container}>Loading...</div>
                ) : (
                    <div>
                        {showOverflowIndicator && (
                            <div className="er-relative">
                                <OverFlowIndicator paperLength={paperLength} />
                            </div>
                        )}
                        <div
                            id="page"
                            style={{
                                width: paperWidth,
                                minWidth: '793px',
                                fontFamily: font,
                                padding: getPagePadding(withoutPadding),
                            }}
                        >
                            <div
                                id="resumeContentContainer"
                                style={{
                                    minHeight: getContentHeight(paperLength),
                                    width: '100%',
                                }}
                            >
                                <Component
                                    {...props}
                                    paperLength={paperLength}
                                    fitToOnePage={fitToOnePage}
                                    topMargin={fitToOnePage ? mainSectionTopMargin : 0}
                                    subsectionTopMargin={fitToOnePage ? subSectionTopMargin : 0}
                                    draggableBlocks={draggableBlocks}
                                    setTopMargin={onSetMainSectionTopMargin}
                                    setSubsectionTopMargin={onSetSubSectionTopMargin}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };
    return WrappedComponent;
};

export default templateWrap;
