import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    display: flex;
    width: calc(100% + 55px);
    transition: transform 0.10s linear;

    transform: ${props => !props.edit ? 'translateX(-55px)' : ''};
`;

export default ItemWrapper;
