import React from 'react';
import styled from 'styled-components';

import ListTasks from './ListTasks';
import ListTasksEmpty from './ListTasksEmpty';

import { Tasks } from '../contexts/Tasks';

const MainContent = styled.div`
    padding: 0 15px;
    overflow: hidden;
    overflow-y: auto;
`;

MainContent.displayName = 'MainContent';

function Content() {
    return (
        <MainContent>
            <Tasks.Consumer>
                {({ tasks }) => (tasks.length > 0
                    ? <ListTasks list={tasks} />
                    : <ListTasksEmpty />
                )}
            </Tasks.Consumer>
        </MainContent>
    );
}

export default Content;
