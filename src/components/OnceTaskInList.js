import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from            '../assets/List/Item';
import ItemWrapper from         '../assets/List/Item/Wrapper';
import ItemLabel from           '../assets/List/Item/Label';
import ItemCheckbox from        '../assets/List/Item/Checkbox';
import ItemCheckboxAlias from   '../assets/List/Item/CheckboxAlias';
import ItemInfo from            '../assets/List/Item/Info';
import ItemDone from            '../assets/List/Item/Done';
import ItemContent from         '../assets/List/Item/Content';

import TimeTask from './TimeTask';

import { Actions } from '../contexts/Actions';
import { TasksEdit } from '../contexts/TasksEdit';

function OnceTaskInList({task}) {
    return (
        <Actions.Consumer>
        {({edit, resetActions}) => (
            <TasksEdit.Consumer>
                {({toggleTaskEdit}) => {
                    return (
                        <ListItem>
                            <ItemWrapper edit={edit}>
                                <ItemLabel>
                                    <ItemCheckbox type="checkbox" onClick={() => { toggleTaskEdit(task.id) }} />
                                    <ItemCheckboxAlias />
                                </ItemLabel>
                                <div style={{width: '100%'}}>
                                    <Link to={`/${task.id}`} onClick={resetActions}>
                                    
                                        <ItemInfo>
                                            <TimeTask time={task.created} />
                                            {
                                                task.done ? <ItemDone>&#10003;</ItemDone> : null
                                            }
                                        </ItemInfo>
                                        <ItemContent>{task.content}</ItemContent>
                                    </Link>
                                </div>
                            </ItemWrapper>
                        </ListItem>
                    )
                }}
            </TasksEdit.Consumer>
        )}
        </Actions.Consumer>
    )
}

export default OnceTaskInList;
