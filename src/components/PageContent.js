import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import OnceTask from './OnceTask';
import ListTasksEmpty from './ListTasksEmpty';

const MainContent = styled.div`
    padding: 0 15px;
    overflow: hidden;
    overflow-y: auto;
`;

MainContent.displayName = 'MainContent';

const List = styled.ul`
    list-style: none;
    width: 100%;
`;

List.displayName = 'List';

function Content({ tasks }) {
    return (
        <MainContent>
            {tasks.length > 0
                ? tasks.map(task => <OnceTask task={task} key={task.id} />)
                : <ListTasksEmpty />}
        </MainContent>
    );
}

const mapStateToProps = (state) => {
    // najpierw sortowanie do zrobienia od najnowszych do najstarszych
    // później sortowanie zrobionych od najnowszych do najstarszych

    // const tasksToDo = state.tasks.list.filter(task => task.done === false).sort((a, b) => a.create - b.create);
    // const tasksDone = state.tasks.list.filter(task => task.done === true).sort((a, b) => a.create - b.create);

    return {
        // tasks: [...tasksToDo, ...tasksDone]

        // zwykłe sortowanie od najnowszych do najstarszych
        tasks: state.tasks.list.sort((a, b) => a.create - b.create)
    }
};

export default connect(mapStateToProps, {})(Content);
