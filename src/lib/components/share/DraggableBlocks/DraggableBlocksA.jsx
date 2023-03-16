import React from 'react';

/**
 *
 * @param {Array} draggableBlocks the draggable blocks for the template
 * @param {Array} availableBlock the available blocks for main/sub section of the template
 * @returns the corresponding component
 */
const DraggableBlocksA = ({ draggableBlocks, availableBlock }) => {
    return draggableBlocks[0].map((section) => {
        const Component = availableBlock[section];
        if (Component) return <Component key={section} />;
        else return <></>;
    });
};

export default DraggableBlocksA;
