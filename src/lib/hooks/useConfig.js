import { useConfig } from '../contexts/ResumeContext';

export const useToolbarConfig = () => {
    const config = useConfig();
    if (config.toolbar) return config.toolbar;
    else return {};
};

export const useOverflowIndicatorConfig = () => {
    const config = useConfig();
    if (config.overflowIndicator) return config.overflowIndicator;
    else return {};
};
