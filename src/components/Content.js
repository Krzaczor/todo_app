import React from 'react'

import ListTasks        from '../components/ListTasks';
import ListTasksEmpty   from '../components/ListTasksEmpty';

import MainContent      from '../assets/MainContent';

import { Tasks } from '../contexts/Tasks';

function Content() {
    return (
        <MainContent>
            <Tasks.Consumer>
                {({ tasks }) => (
                    tasks.length > 0 ?
                        <ListTasks list={tasks} /> :
                        <ListTasksEmpty />
                )}
            </Tasks.Consumer>
        </MainContent>
    );
}

export default Content;
