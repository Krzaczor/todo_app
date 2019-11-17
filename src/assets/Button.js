import styled from 'styled-components';

const Button = styled.button `
    font-size: 16px;
    padding: 15px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;

    margin-left: ${props => props.once ? 'auto' : ''};
`;

export default Button;