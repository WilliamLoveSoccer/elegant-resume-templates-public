import ExampleTheme from './themes/ExampleTheme';
// import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import * as React from 'react';

import PluginsRegister from './plugins/PluginsRegister';

export default function Editor({
    prepopulatedHTML,
    disbaledToolbarMenus = {},
    onChange,
}: {
    prepopulatedHTML: string;
    disbaledToolbarMenus: {
        paragraph?: boolean;
        bulletList?: boolean;
        numberedList?: boolean;
        bold?: boolean;
    };
    onChange: Function;
}) {
    const editorConfig = {
        namespace: 'ErEditor',
        theme: ExampleTheme,
        onError(error: any) {
            throw error;
        },
        // Any custom nodes go here
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,
        ],
    };

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <PluginsRegister prepopulatedHTML={prepopulatedHTML} disbaledToolbarMenus={disbaledToolbarMenus} onChange={onChange} />
        </LexicalComposer>
    );
}
