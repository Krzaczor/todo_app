import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import OnceTask from './OnceTask';
import ListTasksEmpty from './ListTasksEmpty';

const MainContent = styled.div`
    padding: 0 15px;
    margin-bottom: 60px;
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
                ? <List>{tasks.map(task => <OnceTask task={task} key={task.id} />)}</List>
                : <ListTasksEmpty />}
        </MainContent>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.list.sort((a, b) => a.create < b.create)
    }
};

export default connect(mapStateToProps, {})(Content);
