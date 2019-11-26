import React from 'react';
import styled from 'styled-components';

// import { Tasks } from '../contexts/Tasks';
import { Actions } from '../contexts/Actions';

const Navbar = styled.div`
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

    margin-left: ${props => props.once ? 'auto' : ''};
`;

Button.displayName = 'Button';


function Menu() {
    return (
        <Actions.Consumer>
            {({ edit, changeEdit }) => (
                <Navbar>
                    <Button onClick={changeEdit}>{edit ? 'anuluj' : 'zarządzaj'}</Button>
                    <Button>dodaj</Button>
                </Navbar>
            )}
        </Actions.Consumer>
    );
}

export default Menu;