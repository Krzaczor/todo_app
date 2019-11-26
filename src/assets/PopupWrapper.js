import styled from 'styled-components';

const PopupWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #FFF;
    width: 100vw;
    height: 80vh;
    border-radius: 20px 20px 0 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 60px;
`;

export default PopupWrapper;
