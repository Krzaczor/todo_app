import React from 'react'

import OnceTaskInList from './OnceTaskInList';
import List from '../assets/List';
function ListTasks(props) {
    return (
        <List>
            { props.list.map(task =>
                <OnceTaskInList controlTasks={props.controlTasks} task={task} key={task.id} />
            )} 
        </List>
    )
}

export default ListTasks;
