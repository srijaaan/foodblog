import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Footer from '../../../components/Footer/footer.component.jsx';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
});