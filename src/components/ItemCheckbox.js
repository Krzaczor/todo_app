import React from 'react';
import styled from 'styled-components';

const CheckboxAlias = styled.span`
    display: block;
    width: 35px;
    height: 35px;
    border: 1px solid;
    border-color: ${props => props.isClick ? '#2979FF' : 'lightgray'};
    border-radius: 50%;
    position: relative;

    &:hover {
        border-color: #2979FF;
    }

    &:before {
        content: '';
        display: ${props => props.isClick ? 'block' : 'none'};
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2979FF;
        border-radius: 50%;
    }
`;

CheckboxAlias.displayName = 'CheckboxAlias';

const Label = styled.label`
    cursor: pointer;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
`;

Label.displayName = 'Label';

const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    opacity: 0;
    position: absolute;

    &:focus ~ ${CheckboxAlias} {
        border-color: #2979FF;
    }
`;

Checkbox.displayName = 'Checkbox';

function ItemCheckbox({ isClick, changeIsClick }) {
    return (
        <Label>
            <Checkbox onClick={changeIsClick} />
            <CheckboxAlias isClick={isClick} />
        </Label>
    )
}

export default ItemCheckbox;
