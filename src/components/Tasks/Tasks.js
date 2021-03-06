import styled from 'styled-components';

import Item from './Item/Item';

const List = styled.ul`
    list-style: none;
    width: 100%;
    padding: 60px 15px 50px;
`;

List.displayName = 'List';

function Tasks({ tasks }) {
    return (
        <List>
            { tasks.map(task => 
                <Item task={task} key={task.id} />
            )}
        </List>
    )
}

export default Tasks;
