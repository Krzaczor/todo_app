import { Component } from 'react';
import Moment from 'react-moment';
import Modal from 'rodal';
import styled from 'styled-components';
import { connect } from 'react-redux';

import tasksActions from '../../store/tasks/actions';
import modesActions from '../../store/modes/actions';

import 'rodal/lib/rodal.css';

const PopupContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto 1fr auto;
    height: 100%;
    position: relative;
`;

const PopupTitle = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #2979FF;
`;

const PopupTime = styled(Moment)`
    font-size: 0.9em;
    text-align: center;
    color: #2979FF;
    margin-top: 10px;
`;

const PopupDone = styled.div`
    position: absolute;
    right: 8px;
    top: 10px;
    transform: translateY(-50%);

    &:before {
        content: '';
        display: block;
        transform: rotate(45deg);
        height: 26px;
        width: 13px;
        border-bottom: 2px solid #000;
        border-right: 2px solid #000;
    }
`;

const PopupContent = styled.div`
    font-size: 1.2em;
    margin: 20px 0;
    white-space: pre-wrap;
    overflow: auto;
`;

const PopupControl = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-right: 5px;

    &:last-child {
        margin-right: 0;
    }
`;

const BtnCancle = styled(Button)`
    background-color: #2979FF;
    color: #FFF;

    &:hover, &:focus {
        background-color: #1E88E5
    }
`;

const BtnDone = styled(Button)`
    background-color: #2E7D32;
    color: #FFF;

    &:hover, &:focus {
        background-color: #388E3C
    }
`;

const BtnRemove = styled(Button)`
    background-color: #FF3D00;
    color: #FFF;

    &:hover, &:focus {
        background-color: #EF6000
    }
`;

class PopupAddTask extends Component {
    closePopup = () => {
        this.props.closeModalEvent();
        this.props.resetModes();
    }

    doneTaskAndClosePopup = () => {
        this.closePopup();
        this.props.doneTask(this.props.task.id);
    }

    removeTaskAndClosePopup = () => {
        this.closePopup();

        setTimeout(() => {
            this.props.removeTask(this.props.task.id);
        }, 300);

    }

    render() {
        const { task } = this.props;
        return (
            <Modal
                visible={this.props.isOpen || false}
                onClose={this.closePopup}
                showCloseButton={false}
                closeMaskOnClick={true}
                customStyles={{
                    width: '90vw',
                    maxWidth: '450px',
                    height: '90vh',
                    borderRadius: '15px',
                    padding: '15px'
                }}
                customMaskStyles={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}
            >
                <PopupContainer>
                    <PopupTitle>Zadanie</PopupTitle>
                    {task.done && <PopupDone />}
                    <PopupTime format="DD.MM.YYYY kk:mm">{task.create}</PopupTime>
                    <PopupContent>{task.content}</PopupContent>
                    <PopupControl done={task.done}>
                        <BtnCancle onClick={this.closePopup}>anuluj</BtnCancle>
                        {task.done ? null : <BtnDone onClick={this.doneTaskAndClosePopup}>wykonaj</BtnDone>}
                        <BtnRemove onClick={this.removeTaskAndClosePopup}>usuń</BtnRemove>
                    </PopupControl>
                </PopupContainer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    modes: state.modes.list
});

const mapDispatchToProps = (dispatch) => ({
    doneTask: (id) => dispatch(tasksActions.doneTask(id)),
    removeTask: (id) => dispatch(tasksActions.removeTask(id)),
    resetModes: () => dispatch(modesActions.resetModes())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddTask);