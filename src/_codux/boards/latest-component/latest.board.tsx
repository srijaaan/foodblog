import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Latest from '../../../components/Latest/latest.component.jsx';

export default createBoard({
    name: 'Latest',
    Board: () => <Latest />,
    isSnippet: true,
});