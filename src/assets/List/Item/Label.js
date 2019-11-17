import styled from 'styled-components';

import ItemCheckboxAlias from './CheckboxAlias';

const customBlue = '#2979FF';
// const customBlue = 'gray';

const ItemLabel = styled.label`
    cursor: pointer;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;

    &:hover > ${ItemCheckboxAlias},
    & > input:focus ~ span {
        border-color: ${customBlue};
    }

    & > input:checked ~ ${ItemCheckboxAlias} {
        border-color: ${customBlue};
        position: relative;
    }

    & > input:checked ~ ${ItemCheckboxAlias}:before {
        content: '';
        display: block;
        position: absolute;
        width: 21px;
        height: 21px;
        top: 7px;
        left: 7px;
        background-color: ${customBlue};
        border-radius: 50%;
    }
`;

export default ItemLabel;