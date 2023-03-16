import React, { createContext, memo, useCallback, useContext } from 'react';

const ResumeContext = createContext({});

const ResumeProvider = ({ children, resumeData, onUpdate, config }) => {
    const dispatch = useCallback(({ entity, action, payload }) => {
        const { noUpdate } = config;
        if (noUpdate) return;
        if (onUpdate && onUpdate[entity] && onUpdate[entity][action] && typeof onUpdate[entity][action] === 'function') {
            onUpdate[entity][action](payload);
        } else {
            console.log(`Error: entity(${entity}) with action (${action})  does not found.`);
            console.log('payload is:', payload);
        }
    }, []);

    return <ResumeContext.Provider value={{ data: resumeData, dispatch, config }}>{children}</ResumeContext.Provider>;
};

const useSelector = (selector) => {
    const { data } = useContext(ResumeContext);

    if (typeof selector === 'function') return selector(data);
    else return data;
};

const useConfig = () => {
    const { config } = useContext(ResumeContext);
    return config;
};

const useDispatch = () => {
    const { dispatch } = useContext(ResumeContext);
    return dispatch;
};

const memoizedProvider = memo(ResumeProvider);

export { ResumeContext, memoizedProvider as ResumeProvider, useSelector, useDispatch, useConfig };
