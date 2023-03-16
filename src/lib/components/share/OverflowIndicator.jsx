import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaExclamationCircle } from 'react-icons/fa';
import styles from './OverflowIndicator.module.css';

const OverFlowIndicator = ({ paperLength }) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const { t } = useTranslation();

    const handleShowToolTip = () => {
        setShowToolTip(!showToolTip);
    };
    // const getPrintAreaHeight = (paperLength) => {
    //     const paperLengthInPx = paperLength.substring(0, paperLength.length - 2);
    //     return `${paperLengthInPx - 24}px`;
    // };
    const getPrintAreaHeight = (paperLength) => {
        const paperLengthInPx = paperLength.substring(0, paperLength.length - 2);
        // return `${11 - 0.25}in`;
        return `${paperLengthInPx - 24}px`;
    };

    return (
        <div
            id="contentOverflowIndicator"
            className={styles.dashline}
            style={{
                left: 0,
                top: getPrintAreaHeight(paperLength),
            }}
        >
            {showToolTip && <div className={styles.tooltip}>{t('template.overflowWarning')}</div>}
            <div style={{ cursor: 'pointer' }} className="p-2" onMouseOver={handleShowToolTip} onMouseOut={handleShowToolTip}>
                <FaExclamationCircle size={'14px'} />
            </div>
        </div>
    );
};

export default OverFlowIndicator;
