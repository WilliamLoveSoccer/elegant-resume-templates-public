import React, { memo } from 'react';

const AwardItemA = ({ item }) => {
    return (
        <div className="er-pb-3">
            <p className="er-text-sm er-font-bold er-pb-2">{item.title}</p>
            <p className="er-text-sm er-pb-2">{item.awarder}</p>
            <p className="er-text-sm er-pb-2">{item.date}</p>
        </div>
    );
};

export default memo(AwardItemA);
