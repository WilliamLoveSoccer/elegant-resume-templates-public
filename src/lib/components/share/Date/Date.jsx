import React, { memo } from 'react';
import DatePicker from './DatePicker';

const Date = ({ startDate, hideStartDate = false, endDate, updateStartDate, updateEndDate }) => {
    return (
        <div className="er-flex">
            {hideStartDate === false && (
                <>
                    <DatePicker date={startDate} actionCreator={updateStartDate} />
                    <span className="er-px-1">-</span>
                </>
            )}
            <DatePicker date={endDate} actionCreator={updateEndDate} />
        </div>
    );
};

export default memo(Date);
