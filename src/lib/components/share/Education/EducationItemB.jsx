import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import Date from '../Date/Date';

const EducationItemA = ({ id, item }) => {
    return (
        <div className="er-pb-3" key={id}>
            <p className="er-text-sm er-font-bold er-pb-2">
                <ContentEditableEle
                    html={item.degree}
                    actionCreator={(newDegree) => ({ entity: 'edu', action: 'updateEduDegree', payload: { id, newDegree } })}
                />
            </p>
            <p className="er-text-sm er-pb-2">
                <ContentEditableEle
                    html={item.institution}
                    actionCreator={(newInstitution) => ({ entity: 'edu', action: 'updateEduInstitution', payload: { id, newInstitution } })}
                />
            </p>
            <div className="er-text-sm er-pb-2">
                <Date
                    startDate={item.startDate}
                    endDate={item.endDate}
                    hideStartDate={item.hideStartDate}
                    updateStartDate={(newDate) => ({ entity: 'edu', action: 'updateEduStartDate', payload: { id, newDate } })}
                    updateEndDate={(newDate) => ({ entity: 'edu', action: 'updateEduEndDate', payload: { id, newDate } })}
                />
            </div>
            <p className="er-text-sm er-pb-2">
                <ContentEditableEle
                    html={item.location}
                    actionCreator={(newLocation) => ({ entity: 'edu', action: 'updateEduLocation', payload: { id, newLocation } })}
                />
            </p>
        </div>
    );
};

export default memo(EducationItemA);
