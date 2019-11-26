import React from 'react';

import ActionsProvider from './contexts/ActionsProvider';
import TasksProvider from './contexts/TasksProvider';

import Page from './components/Page';

function App() {
    return (
        <TasksProvider>
            <ActionsProvider>
                <Page />
            </ActionsProvider>
        </TasksProvider>
    );
}

export default App;
