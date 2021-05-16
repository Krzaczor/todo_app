import styled from 'styled-components';

const PageTitle = styled.h1`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    text-align: center;
    border-bottom: 1px solid #d3d3d3;
    z-index: 2;
`;

PageTitle.displayName = 'PageTitle';

function Title() {
    return <PageTitle>Lista zadań</PageTitle>
}

export default Title;
