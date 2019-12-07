import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import modesActions from '../store/modes/actions';
import tasksEditActions from '../store/tasksEdit/actions';

import ItemCheckbox from './ItemCheckbox';
import ItemData from './ItemData';
import PopupShowTask from './PopupShowTask';

const ListItem = styled.li`
    border-bottom: 1px solid lightgray;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
`;

ListItem.displayName = 'ListItem';

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    transition: transform 0.10s linear, width 0.10s linear;
    overflow: hidden;
    
    width: ${props => props.done ? !props.edit ? 'calc(100% + 5px)' : 'calc(100% - 45px)' : 'calc(100% + 55px)'};
    transform: ${props => !props.edit ? 'translateX(-55px)' : 'translateX(0)'};
`;

ItemWrapper.displayName = 'ItemWrapper';

const ItemDone = styled.div`
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);

    &:before {
        content: '';
        display: block;
        transform: rotate(45deg);
        height: 20px;
        width: 10px;
        border-bottom: 2px solid #2979FF;
        border-right: 2px solid #2979FF;
    }
`;

ItemDone.displayName = 'ItemDone';

class OnceTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    changeOpenModal = () => {
        this.props.resetTasksEdit();
        this.setState(prevState => ({
            openModal: !prevState.openModal
        }));
    }

    render() {
        const { task, mode, toggleShowTask } = this.props;

        return (
            <ListItem>
                <ItemWrapper edit={mode.edit} done={task.done}>
                    <ItemCheckbox task={task} />
                    <ItemData openModalEvent={this.changeOpenModal} showTaskEvent={toggleShowTask} task={task} />
                </ItemWrapper>
                {task.done && <ItemDone />}

                <PopupShowTask closeModalEvent={this.changeOpenModal} isOpen={this.state.openModal} task={task} />
            </ListItem>
        )
    }
}

const mapStateToProps = (state) => ({
    mode: state.modes.list
});

const mapDispatchToProps = (dispatch) => ({
    toggleShowTask: () => dispatch(modesActions.toggleOnShow()),
    resetTasksEdit: () => dispatch(tasksEditActions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(OnceTask);
