import React from 'react'
import styled from 'styled-components';

import OnceTask from './OnceTask';

const List = styled.ul`
    list-style: none;
    width: 100%;
`;

List.displayName = 'List';

function ListTasks(props) {
    return (
        <List>
            {props.list.map(task =>
                <OnceTask task={task} key={task.id} />
            )}
        </List>
    )
}

export default ListTasks;
