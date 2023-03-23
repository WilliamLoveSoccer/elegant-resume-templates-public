import React, { memo } from 'react';
import ContentEditableEle from '../ContentEditableEle/ContentEditableEle';
import Date from '../Date/Date';
import TextEditor from '../TextEditor';

const ProjectItemA = ({ id, item }) => {
    const { fieldsVisibility } = item;
    const visibility = fieldsVisibility ? JSON.parse(fieldsVisibility) : { subtitle: true, date: false, location: false };

    return (
        <div className="er-pb-2">
            <div className="">
                <div>
                    <p className="er-float-left er-text-sm er-font-bold">
                        <ContentEditableEle
                            html={item.title}
                            actionCreator={(newTitle) => ({ entity: 'project', action: 'updateProjTitle', payload: { id, newTitle } })}
                        />
                    </p>
                    {visibility.date && (
                        <div className="er-float-right er-text-sm er-text-right">
                            <Date
                                startDate={item.startDate}
                                endDate={item.endDate}
                                hideStartDate={item.hideStartDate}
                                updateStartDate={(newDate) => ({ entity: 'project', action: 'updateProjStartDate', payload: { id, newDate } })}
                                updateEndDate={(newDate) => ({ entity: 'project', action: 'updateProjEndDate', payload: { id, newDate } })}
                            />
                        </div>
                    )}
                    <div className="er-clear-both"></div>
                </div>
                <div>
                    {visibility.subtitle && (
                        <p className="er-float-left er-text-sm">
                            <ContentEditableEle
                                html={item.subtitle}
                                actionCreator={(newTitle) => ({ entity: 'project', action: 'updateProjSubtitle', payload: { id, newTitle } })}
                            />
                        </p>
                    )}
                    {visibility.location && (
                        <p className="er-float-right er-text-sm">
                            <ContentEditableEle
                                html={item.location}
                                actionCreator={(newLocation) => ({
                                    entity: 'project',
                                    action: 'updateProjLocation',
                                    payload: { id, newLocation },
                                })}
                            />
                        </p>
                    )}
                    <div className="er-clear-both"></div>
                </div>
            </div>
            <div>
                <TextEditor
                    textEditorHTML={item.summary}
                    actionCreator={(newSummary) => ({ entity: 'project', action: 'updateProjSummary', payload: { id, newSummary } })}
                />
            </div>
        </div>
    );
};

export default memo(ProjectItemA);
