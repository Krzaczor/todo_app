import React, { Component } from 'react';
import Modal from 'rodal';
import styled from 'styled-components';
import { connect } from 'react-redux';
import tasksActions from '../store/tasks/actions';
import modesActions from '../store/modes/actions';
import 'rodal/lib/rodal.css';

const Form = styled.form`
    width: 100%;
    height: 100%;
`;

const PopupContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    height: 100%;
`;

const PopupTitle = styled.h2`
    font-size: 26px;
    padding-bottom: 10px;
    border-bottom: 1px solid #2979FF;
`;

const PopupFieldText = styled.textarea`
    resize: none;
    margin: 20px 0;
    line-height: 1.3em;
    letter-spacing: 0.1em;
    border: none;
`;

const PopupControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    font-size: 14px;
    font-weight: 700;
    padding: 15px;
    border: 1px solid #2979FF;
    color: #2979FF;
    background-color: transparent;
    border-radius: 7ch;
    cursor: pointer;
    /* height: 100px; */

    &:before {
        content: '';
        display: flex;
        width: 20px;
        height: 20px;
        border-left: 1px solid #2979FF;
        border-bottom: 1px solid #2979FF;
        transform: ${props => props.back
        ? 'translateX(25%) rotate(45deg)'
        : 'translateX(-20%) rotate(-135deg)'}
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

    closePopup = () => {
        this.props.resetActions();
    }

    createTask = (e) => {
        e.preventDefault();
        if (this.state.valueTextarea.trim() !== '') {
            this.props.addTask(this.state.valueTextarea.trim());
            this.setState({
                valueTextarea: ''
            });
            this.closePopup();
        }
    }

    render() {
        return (
            <Modal
                visible={this.props.modes.add}
                onClose={this.closePopup}
                showCloseButton={false}
                closeMaskOnClick={true}
                customStyles={{
                    width: '85vw',
                    height: '85vh',
                    borderRadius: '15px',
                    padding: '30px'
                }}
                customMaskStyles={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            >
                <Form onSubmit={this.createTask}>
                    <PopupContainer>
                        <label htmlFor='fieldForValueTask'><PopupTitle>Dodawanie zadania</PopupTitle></label>
                        <PopupFieldText value={this.state.valueTextarea} onChange={this.changeValue} id='fieldForValueTask' placeholder='tutaj wpisz treść zadania' />
                        <PopupControl>
                            <Button back onClick={this.closePopup}></Button>
                            <Button></Button>
                        </PopupControl>
                    </PopupContainer>
                </Form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    modes: state.modes.list
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (content) => dispatch(tasksActions.add(content)),
    toggleOnAdd: () => dispatch(modesActions.toggleOnAdd()),
    resetActions: () => dispatch(modesActions.reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddTask);