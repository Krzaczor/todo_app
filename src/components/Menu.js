import React from 'react';

import Navbar from '../assets/Navbar';
import Button from '../assets/Button';

import { Tasks } from '../contexts/Tasks';
import { TasksEdit } from '../contexts/TasksEdit';
import { Actions } from '../contexts/Actions';

function Menu() {
    return (
        <Tasks.Consumer>
        {({tasks}) => (
            <TasksEdit.Consumer>
            {({resetTaskEdit}) => (
                <Actions.Consumer>
                {({edit, toggleAdd, toggleEdit}) => (
                    <Navbar>
                        { tasks.length > 0 ?
                            <Button onClick={() => {toggleEdit(); resetTaskEdit() }}>
                                { edit ? 'anuluj' : 'zarządzaj' }
                            </Button> :
                            null
                        }
                        <Button once={tasks.length === 0} onClick={toggleAdd}>dodaj</Button>
                    </Navbar>
                )}
            </Actions.Consumer>
            )}
            
            </TasksEdit.Consumer>
        )}
            
        </Tasks.Consumer>
    );
}

export default Menu;