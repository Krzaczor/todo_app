import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import tasksActions from '../store/tasks/actions';
import tasksManagementActions from '../store/tasksManagement/actions';
import modesActions from '../store/modes/actions';

const Navbar = styled.div`
    position: absolute;
    width: 100vw;
    height: 60px;
    bottom: 0;
    left: 0;
    background-color: #2979FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

Navbar.displayName = 'Navbar';

const Button = styled.button`
    font-size: 16px;
    padding: 15px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;

    ${props => props.single && 'margin-left: auto'};
`;

Button.displayName = 'Button';

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

function PageMenu({
    tasks,
    doneTasks,
    removeTasks,
    tasksManagement,
    modes,
    setEditingMode,
    setAddingMode,
    resetModes,
    resetTasksManagement
}) {
    return (
        <Navbar>
            {tasks.length > 0 && (modes.edit ?
                <Button onClick={() => { resetModes(); resetTasksManagement() }}>anuluj</Button> :
                <Button onClick={setEditingMode}>zarządzaj</Button>)}
            {modes.edit ?
                <ButtonGroup>
                    {tasks.some(task => tasksManagement.includes(task.id) && !task.done) &&
                        <Button onClick={() => {
                            doneTasks(tasksManagement);
                            resetModes();
                            resetTasksManagement();
                        }}>wykonaj</Button>}

                    {tasksManagement.length > 0 &&
                        <Button onClick={() => {
                            removeTasks(tasksManagement);
                            resetModes();
                            resetTasksManagement();
                        }}>usuń</Button>}

                </ButtonGroup> :
                <Button single={tasks.length === 0} onClick={setAddingMode}>dodaj</Button>}
        </Navbar>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    tasksManagement: state.tasksManagement,
    modes: state.modes
});

const mapDispatchToProps = (dispatch) => ({
    removeTasks: (id) => dispatch(tasksActions.removeTask(id)),
    doneTasks: (id) => dispatch(tasksActions.doneTask(id)),
    setEditingMode: () => dispatch(modesActions.setEditingMode()),
    setAddingMode: () => dispatch(modesActions.setAddingMode()),
    resetModes: () => dispatch(modesActions.resetModes()),
    resetTasksManagement: () => dispatch(tasksManagementActions.resetTasksManagement())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu);