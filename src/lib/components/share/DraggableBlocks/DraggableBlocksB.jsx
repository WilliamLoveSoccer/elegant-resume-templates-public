import React from 'react';

const DraggableBlocksB = ({ draggableBlocks, availableBlocks }) => {
    return draggableBlocks ? (
        draggableBlocks.map((section, index) => {
            const Component = availableBlocks[section];
            if (Component) {
                if (index === 0) {
                    return <Component key={section} firstTopMargin={0} />;
                }
                return <Component key={section} />;
            }
        })
    ) : (
        <div />
    );
};

export default DraggableBlocksB;
