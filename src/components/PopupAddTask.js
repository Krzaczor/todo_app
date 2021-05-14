import React, { Component } from 'react';
import Modal from 'rodal';
import styled from 'styled-components';
import { connect } from 'react-redux';
import tasksActions from '../store/tasks/actions';
import modesActions from '../store/modes/actions';
import 'rodal/lib/rodal.css';

const PopupContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    height: 100%;
`;

const PopupTitle = styled.h2`
    font-size: 2.1em;
    padding-bottom: 10px;
    border-bottom: 1px solid #2979FF;
`;

const PopupFieldText = styled.textarea`
    resize: none;
    margin: 20px 0;
    font-size: 1.1em;
    line-height: 1.1em;
    letter-spacing: 0.1em;
    border: none;
`;

const PopupControl = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
`;

const Button = styled.button`
    font-size: 14px;
    font-weight: 700;
    padding: 15px;
    cursor: pointer;
    color: #FFF;
    border: none;
    background-color: ${props => props.cancle ? '#2979FF' : '#2E7D32'};
    border-radius: ${props => props.cancle ? '0 0 0 15px' : '0 0 15px 0'};

    &:hover,
    &:focus {
        background-color: ${props => props.cancle ? '#1E88E5' : '#388E3C'};
    }
`;

class PopupAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTextarea: ''
        };
    }

    changeValue = (e) => {
        this.setState({
            valueTextarea: e.target.value
        })
    }

    resetValue = () => {
        this.setState({
            valueTextarea: ''
        })
    }

    closePopup = () => {
        this.resetValue();
        this.props.resetModes();
    }

    createTask = (e) => {
        e.preventDefault();
        if (this.state.valueTextarea.trim() !== '') {
            this.props.addTask(this.state.valueTextarea.trim());
            this.resetValue();
            this.closePopup();
        }
    }

    render() {
        const { closePopup, changeValue, createTask, props, state } = this;
        const { modes } = props;
        const { valueTextarea } = state;

        return (
            <Modal
                visible={modes.add}
                onClose={closePopup}
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
                    <label htmlFor='fieldForValueTask'>
                        <PopupTitle>Dodawanie zadania</PopupTitle>
                    </label>
                    <PopupFieldText
                        id='fieldForValueTask'
                        value={valueTextarea}
                        onChange={changeValue}
                        placeholder='tutaj wpisz treść zadania'
                    />
                    <PopupControl>
                        <Button onClick={closePopup} cancle>anuluj</Button>
                        <Button onClick={createTask}>utwórz</Button>
                    </PopupControl>
                </PopupContainer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    modes: state.modes
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (content) => dispatch(tasksActions.addTask(content)),
    resetModes: () => dispatch(modesActions.resetModes())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddTask);