import styled from 'styled-components';

const WrapperPage = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 60px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh - 60px);
        background-color: #000;
        opacity: ${props => !props.add ? 0 : .7};
        z-index: ${props => !props.add ? -100 : 0};
        transition: opacity .2s linear;
    }
`;

export default WrapperPage;
