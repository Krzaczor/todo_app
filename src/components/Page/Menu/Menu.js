import { connect } from 'react-redux';
import styled from 'styled-components';
import tasksActions from '../../../store/tasks/actions';
import tasksManagementActions from '../../../store/tasksManagement/actions';
import modesActions from '../../../store/modes/actions';

const Navbar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #2979FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

Navbar.displayName = 'Navbar';

const Button = styled.button`
    font-size: 16px;
    padding: 15px 20px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    user-select: none;

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
            { tasks.length === 0
                ? null
                : (
                    modes.edit
                        ? <Button onClick={ () => { resetModes(); resetTasksManagement() }}>anuluj</Button> 
                        : <Button onClick={setEditingMode}>zarządzaj</Button>
                )
            }

            { !modes.edit
                ? <Button single={tasks.length === 0} onClick={setAddingMode}>dodaj</Button>
                : (
                    <ButtonGroup>
                        { !tasks.some(task => tasksManagement.includes(task.id) && !task.done)
                            ? null
                            : (
                                <Button onClick={() => {
                                    doneTasks(tasksManagement);
                                    resetModes();
                                    resetTasksManagement();
                                }}>
                                    wykonaj
                                </Button>
                            ) 
                        }
                        { tasksManagement.length === 0
                            ? null
                            : (
                                <Button onClick={() => {
                                    removeTasks(tasksManagement);
                                    resetModes();
                                    resetTasksManagement();
                                }}>
                                    usuń
                                </Button>
                            ) 
                        }
                    </ButtonGroup>
                )
            }
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