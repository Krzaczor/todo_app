import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import tasksActions from '../store/tasks/actions';
import tasksEditActions from '../store/tasksEdit/actions';
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

function PageMenu({ tasks, doneTasks, removeTasks, tasksEdit, modes, toggleOnEdit, toggleOnAdd, resetModes, resetTasksEdit }) {
    return (
        <Navbar>
            {tasks.length > 0 && (modes.edit ?
                <Button onClick={() => { resetModes(); resetTasksEdit() }}>anuluj</Button> :
                <Button onClick={toggleOnEdit}>zarządzaj</Button>)}
            {modes.edit ?
                <ButtonGroup>
                    {tasks.some(task => tasksEdit.includes(task.id) && !task.done) &&
                        <Button onClick={() => {
                            doneTasks(tasksEdit);
                            resetModes();
                            resetTasksEdit();
                        }}>wykonaj</Button>}

                    {tasksEdit.length > 0 &&
                        <Button onClick={() => {
                            removeTasks(tasksEdit);
                            resetModes();
                            resetTasksEdit();
                        }}>usuń</Button>}

                </ButtonGroup> :
                <Button single={tasks.length === 0} onClick={toggleOnAdd}>dodaj</Button>}
        </Navbar>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.list,
    tasksEdit: state.tasksEdit.list,
    modes: state.modes.list
});

const mapDispatchToProps = (dispatch) => ({
    removeTasks: (id) => dispatch(tasksActions.remove(id)),
    doneTasks: (id) => dispatch(tasksActions.done(id)),
    toggleOnEdit: () => dispatch(modesActions.toggleOnEdit()),
    toggleOnAdd: () => dispatch(modesActions.toggleOnAdd()),
    resetModes: () => dispatch(modesActions.reset()),
    resetTasksEdit: () => dispatch(tasksEditActions.reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu);