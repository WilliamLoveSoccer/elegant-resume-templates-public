import React from 'react';
import PageContext from '../../../contexts/PageContext';

const DraggableBlocksC = ({ draggableBlocks, availableBlocks, firstItemCtx, otherItemCtx }) => {
    return draggableBlocks ? (
        draggableBlocks.map((section, index) => {
            const Component = availableBlocks[section];
            if (Component) {
                if (index === 0) {
                    return (
                        <PageContext.Provider key={section} value={firstItemCtx}>
                            <Component firstTopMargin={0} />
                        </PageContext.Provider>
                    );
                }
                return (
                    <PageContext.Provider key={section} value={otherItemCtx}>
                        <Component />
                    </PageContext.Provider>
                );
            }
        })
    ) : (
        <div />
    );
};

export default DraggableBlocksC;
