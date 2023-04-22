import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import Date from '../Date/Date';
import TextEditor from '../TextEditor';

const ExperienceItemA = ({ id, item }) => {
    return (
        <div className="er-pb-2" key={id}>
            <div>
                <div className="er-float-left er-text-sm er-font-bold">
                    <ContentEditableEle
                        html={item.jobTitle}
                        actionCreator={(newJobTitle) => ({ entity: 'exp', action: 'updateExpJobTitle', payload: { id, newJobTitle } })}
                    />
                </div>
                <div className="er-float-right er-text-sm">
                    <Date
                        startDate={item.startDate}
                        hideStartDate={item.hideStartDate}
                        endDate={item.endDate}
                        updateStartDate={(newDate) => ({ entity: 'exp', action: 'updateExpStartDate', payload: { id, newDate } })}
                        updateEndDate={(newDate) => ({ entity: 'exp', action: 'updateExpEndDate', payload: { id, newDate } })}
                    />
                </div>
                <div className="er-clear-both"></div>
            </div>
            <div>
                <div className="er-float-left er-text-sm">
                    <ContentEditableEle
                        html={item.employer}
                        actionCreator={(newEmployer) => ({ entity: 'exp', action: 'updateExpEmployer', payload: { id, newEmployer } })}
                    />
                </div>
                <div className="er-float-right er-text-sm">
                    <ContentEditableEle
                        html={item.location}
                        actionCreator={(newLocation) => ({ entity: 'exp', action: 'updateExpLocation', payload: { id, newLocation } })}
                    />
                </div>
                <div className="er-clear-both"></div>
            </div>
            <TextEditor
                textEditorHTML={item.jobDuties}
                actionCreator={(newJobDuties) => ({ entity: 'exp', action: 'updateExpJobDuties', payload: { id, newJobDuties } })}
            />
        </div>
    );
};

export default memo(ExperienceItemA);
