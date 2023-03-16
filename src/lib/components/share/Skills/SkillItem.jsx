import React, { memo, useContext } from 'react';

const ProjectItemA = ({ item }) => {
    return <li className="er-text-sm er-pb-2 ">{item.name}</li>;
};

export default memo(ProjectItemA);
