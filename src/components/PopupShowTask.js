import React, { Component } from 'react';
import Moment from 'react-moment';
import Modal from 'rodal';
import styled from 'styled-components';
import { connect } from 'react-redux';
import tasksActions from '../store/tasks/actions';
import modesActions from '../store/modes/actions';
import 'rodal/lib/rodal.css';

const PopupContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto 1fr auto;
    height: 100%;
    position: relative;
`;

const PopupTitle = styled.h2`
    font-size: 2.1em;
    padding-bottom: 10px;
    border-bottom: 1px solid #2979FF;
`;

const PopupTime = styled.p`
    color: #2979FF;
    font-size: 0.9em;
    margin-top: 10px;
`;

const PopupDone = styled.div`
    position: absolute;
    right: 8px;
    top: 17px;
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
    display: grid;
    grid-template-columns: ${props => props.done ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
    grid-column-gap: 5px;
`;

const Button = styled.button`
    font-size: 14px;
    font-weight: 700;
    padding: 15px 0;
    cursor: pointer;
    color: #FFF;
    border: none;
    background-color: ${props => props.cancle ? '#2979FF' : props.done ? '#2E7D32' : '#FF3D00'};
    border-radius: ${props => props.cancle ? '0 0 0 15px' : props.done ? '0' : '0 0 15px 0'};

    &:hover,
    &:focus {
        background-color: ${props => props.cancle ? '#1E88E5' : props.done ? '#388E3C' : '#EF6000'};
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
                    width: '85vw',
                    maxWidth: '425px',
                    height: '85vh',
                    borderRadius: '15px',
                    padding: '15px'
                }}
                customMaskStyles={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
            >
                <PopupContainer>
                    <PopupTitle>Zadanie</PopupTitle>
                    {task.done && <PopupDone />}
                    <PopupTime>
                        <Moment format="DD.MM.YYYY kk:mm">{task.create}</Moment>
                    </PopupTime>
                    <PopupContent>{task.content}</PopupContent>
                    <PopupControl done={task.done}>
                        <Button cancle onClick={this.closePopup}>anuluj</Button>
                        {!task.done && <Button done onClick={this.doneTaskAndClosePopup}>wykonaj</Button>}
                        <Button onClick={this.removeTaskAndClosePopup}>usuń</Button>
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
    doneTask: (id) => dispatch(tasksActions.done(id)),
    removeTask: (id) => dispatch(tasksActions.remove(id)),
    resetModes: () => dispatch(modesActions.resetModes())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddTask);