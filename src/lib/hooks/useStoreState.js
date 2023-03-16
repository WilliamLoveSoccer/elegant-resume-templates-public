import { get } from 'lodash';
import { useSelector } from '../contexts/ResumeContext';

export const useEntitiesState = (path = '') => {
    const state = useSelector((state) => state);
    return getState(state, path);
};

export const useContactState = (path = '') => {
    const state = useSelector((state) => state.contact);
    return getState(state, path);
};

export const useMetadateState = (path = '') => {
    const state = useSelector((state) => state.metadata);
    return getState(state, path);
};
export const useExpState = (path = '') => {
    const state = useSelector((state) => state.experience);
    return getState(state, path);
};

export const useEduState = (path = '') => {
    const state = useSelector((state) => state.education);

    return getState(state, path);
};

export const useSummaryState = (path = '') => {
    const state = useSelector((state) => state.summary);
    return getState(state, path);
};

export const useProjectState = (path = '') => {
    const state = useSelector((state) => state.project);
    return getState(state, path);
};
export const useAcademicExperienceState = (path = '') => {
    const state = useSelector((state) => state.academicExperience);
    return getState(state, path);
};
export const useSkillState = (path = '') => {
    const state = useSelector((state) => state.skill);
    return getState(state, path);
};

export const useAwardState = (path = '') => {
    const state = useSelector((state) => state.awards);
    return getState(state, path);
};

export const useUserSettingsState = (path = '') => {
    const state = useSelector((state) => state.userSettings);
    return getState(state, path);
};

const getState = (state, path) => {
    if (typeof path === 'string' && path.length > 0) {
        return get(state, path);
    } else {
        return state;
    }
};
