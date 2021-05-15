import styled from 'styled-components';

const PageTitle = styled.h1`
    padding: 10px 20px;
    text-align: center;
    border-bottom: 1px solid #d3d3d3;
`;

PageTitle.displayName = 'PageTitle';

function Title() {
    return <PageTitle>Lista zadań</PageTitle>
}

export default Title;
