import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import Date from '../Date/Date';
import TextEditor from '../TextEditor';

const EducationItemA = ({ id, item }) => {
    return (
        <div className="er-pb-2" key={id}>
            <div className={'er-flex' + ' er-justify-between'}>
                <p className="er-text-sm er-font-bold">
                    <ContentEditableEle
                        html={item.degree}
                        actionCreator={(newDegree) => ({ entity: 'edu', action: 'updateEduDegree', payload: { id, newDegree } })}
                    />
                </p>
                <p className="er-text-sm">
                    <ContentEditableEle
                        html={item.institution}
                        actionCreator={(newInstitution) => ({ entity: 'edu', action: 'updateEduInstitution', payload: { id, newInstitution } })}
                    />
                </p>

                <p className="er-text-sm">
                    <ContentEditableEle
                        html={item.location}
                        actionCreator={(newLocation) => ({ entity: 'edu', action: 'updateEduLocation', payload: { id, newLocation } })}
                    />
                </p>
                <div className="er-text-sm">
                    <Date
                        startDate={item.startDate}
                        endDate={item.endDate}
                        hideStartDate={item.hideStartDate}
                        updateStartDate={(newDate) => ({ entity: 'edu', action: 'updateEduStartDate', payload: { id, newDate } })}
                        updateEndDate={(newDate) => ({ entity: 'edu', action: 'updateEduEndDate', payload: { id, newDate } })}
                    />
                </div>
            </div>
            {item.summaryVisibility && (
                <TextEditor
                    textEditorHTML={item.summary}
                    actionCreator={(newSummary) => ({ entity: 'edu', action: 'updateEduSummary', payload: { id, newSummary } })}
                />
            )}
        </div>
    );
};

export default memo(EducationItemA);
