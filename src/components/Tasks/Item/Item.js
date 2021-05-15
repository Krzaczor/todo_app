import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import modesActions from '../../../store/modes/actions';
import tasksManagementActions from '../../../store/tasksManagement/actions';
import Checkbox from './Checkbox';
import Data from './Data';
import PopupShowingTask from '../../Popup/ShowingTask';

const ListItem = styled.li`
    border-bottom: 1px solid lightgray;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    user-select: none;
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

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    changeOpenModal = () => {
        this.props.resetTasksManagement();
        this.setState(prevState => ({
            openModal: !prevState.openModal
        }));
    }

    handleModalAndShowingMode = () => {
        this.changeOpenModal();
        this.props.setShowingMode();
    }

    render() {
        const { changeOpenModal, handleModalAndShowingMode, props, state } = this;
        const { task, modes } = props;
        const { openModal } = state;

        return (
            <ListItem>
                <ItemWrapper edit={modes.edit} done={task.done}>
                    <Checkbox task={task} />
                    <Data handleModalAndShowingMode={handleModalAndShowingMode} task={task} />
                </ItemWrapper>
                {task.done && <ItemDone />}

                <PopupShowingTask closeModalEvent={changeOpenModal} isOpen={openModal} task={task} />
            </ListItem>
        )
    }
}

const mapStateToProps = (state) => ({
    modes: state.modes
});

const mapDispatchToProps = (dispatch) => ({
    setShowingMode: () => dispatch(modesActions.setShowingMode()),
    resetTasksManagement: () => dispatch(tasksManagementActions.resetTasksManagement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);
