import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { monthOptions } from '../../../data/timeOptions';
import { useStoreDispatch } from '../../../hooks/useStoreDispatch';
import { useMetadateState } from '../../../hooks/useStoreState';

const DatePicker = ({ date, actionCreator }) => {
    const [showModal, setShowModal] = useState(false);

    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(null);
    const containerRef = useRef();
    const stateRef = useRef(showModal);
    const dispatch = useStoreDispatch();
    const didupdateRef = useRef(false);
    const { t, i18n } = useTranslation();
    const { dateFormat } = useMetadateState();

    useEffect(() => {
        if (didupdateRef.current === true) {
            if (month !== null) {
                switch (dateFormat) {
                    case 1: {
                        dispatch(actionCreator(`${year}.${month}`));
                        return;
                    }
                    case 3: {
                        dispatch(actionCreator(`${year}/${month}`));
                        return;
                    }
                    case 2: {
                        dispatch(actionCreator(`${month}/${year}`));
                        return;
                    }
                }
            }
        } else {
            didupdateRef.current = true;
        }
    }, [month, dateFormat]);

    const handleClick = () => {
        const showModal = stateRef.current;

        setShowModal(!showModal);
        stateRef.current = !showModal;
        if (!showModal) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
    };

    const handleOutsideClick = (event) => {
        if (!containerRef.current.contains(event.target)) handleClick();
    };

    const handleYearIncDec = (flag) => {
        const newYear = year + flag;
        if (month === undefined) {
            const monthLable = getMonthLabel(1);
            setMonth(monthLable);
        }
        setYear(newYear);
    };

    const onMonthClicked = (month) => {
        setShowModal(false);
        document.removeEventListener('click', handleOutsideClick);
        const monthLabel = getMonthLabel(month);
        setMonth(monthLabel);
    };

    const getMonthLabel = (monthOption) => {
        switch (dateFormat) {
            case 1: {
                return monthOption.digitalLabel;
            }
            case 2: {
                return monthOption.digitalLabel;
            }
            case 3: {
                return monthOption.digitalLabel;
            }
        }
    };

    const handleClickPresent = () => {
        dispatch(actionCreator(`Present`));
    };

    const getCalendarPosition = () => {
        const page = document.getElementById('page');
        const pagePos = page.getBoundingClientRect();
        const pageWidth = page.clientWidth;
        const labelPos = containerRef.current.getBoundingClientRect();
        const rightOverflow = labelPos.left + 150 - (pagePos.left + pageWidth);
        const leftOverflow = labelPos.left - 70 - pagePos.left;
        let left = -70;
        if (rightOverflow > 0) {
            left = -70 - rightOverflow;
        } else if (leftOverflow < 0) {
            left = -70 - leftOverflow;
        }
        return { top: '30px', left, zIndex: 10 };
    };
    return (
        <div ref={containerRef} className="er-relative">
            <div className="er-cursor-pointer" onClick={handleClick}>
                {date}
            </div>
            {showModal && (
                <div className="er-absolute er-bg-white er-border er-border-solid er-border-gray-300" style={getCalendarPosition()}>
                    <div className="er-p-5" style={{ minWidth: '200px' }}>
                        <div className="er-w-full er-flex er-items-center er-justify-between">
                            <div className="er-p-3 er-cursor-pointer" onClick={() => handleYearIncDec(-1)}>
                                <FaAngleLeft />
                            </div>
                            <div>{year}</div>
                            <div className="er-p-3 er-cursor-pointer" onClick={() => handleYearIncDec(1)}>
                                <FaAngleRight />
                            </div>
                        </div>

                        <div className="er-grid er-grid-cols-4 er-gap-3">
                            {monthOptions.map((month) => (
                                <div
                                    className="er-py-2 er-cursor-pointer er-whitespace-nowrap er-text-center"
                                    key={month.id}
                                    onClick={() => onMonthClicked(month)}
                                >
                                    {month[i18n.language]}
                                </div>
                            ))}
                        </div>

                        <div className="er-text-center er-pt-3 er-cursor-pointer" onClick={handleClickPresent}>
                            {t('datePicker.present')}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(DatePicker);
