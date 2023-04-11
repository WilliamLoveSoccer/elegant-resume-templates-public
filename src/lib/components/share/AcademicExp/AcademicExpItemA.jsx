import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import Date from '../Date/Date';
import TextEditor from '../TextEditor';

const AcademicExpItemA = ({ id, item }) => {
    const { fieldsVisibility } = item;
    const visibility = fieldsVisibility ? JSON.parse(fieldsVisibility) : { subtitle: true, date: false, location: false };

    return (
        <div className="er-pb-2">
            <div className="er-flex er-justify-between">
                <div>
                    <div className="er-text-sm er-font-bold">
                        <ContentEditableEle
                            html={item.title}
                            actionCreator={(newTitle) => ({
                                entity: 'academicExperience',
                                action: 'updateAcademicExperienceTitle',
                                payload: { id, newTitle },
                            })}
                        />
                    </div>
                    {visibility.subtitle && (
                        <div className="er-text-sm">
                            <ContentEditableEle
                                html={item.subtitle}
                                actionCreator={(newTitle) => ({
                                    entity: 'academicExperience',
                                    action: 'updateAcademicExperienceSubtitle',
                                    payload: { id, newTitle },
                                })}
                            />
                        </div>
                    )}
                </div>
                <div className='er-flex er-flex-col er-items-end'>
                    {visibility.date && (
                        <div>
                            <div className="er-text-right er-text-sm">
                                <Date
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                    updateStartDate={(newDate) => ({
                                        entity: 'academicExperience',
                                        action: 'updateAcademicExperienceStartDate',
                                        payload: { id, newDate },
                                    })}
                                    updateEndDate={(newDate) => ({
                                        entity: 'academicExperience',
                                        action: 'updateAcademicExperienceEndDate',
                                        payload: { id, newDate },
                                    })}
                                />
                            </div>
                        </div>
                    )}
                    {visibility.location && (
                        <div>
                            <div className="er-text-sm er-text-right">
                                <ContentEditableEle
                                    html={item.location}
                                    actionCreator={(newLocation) => ({
                                        entity: 'academicExperience',
                                        action: 'updateAcademicExperienceLocation',
                                        payload: { id, newLocation },
                                    })}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <TextEditor
                    textEditorHTML={item.summary}
                    actionCreator={(newSummary) => ({
                        entity: 'academicExperience',
                        action: 'updateAcademicExperienceSummary',
                        payload: { id, newSummary },
                    })}
                />
            </div>
        </div>
    );
};

export default memo(AcademicExpItemA);
