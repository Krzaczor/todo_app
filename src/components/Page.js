import styled from 'styled-components';

import PageMenu from './PageMenu';
import PageContent from './PageContent';
import PopupAddTask from './PopupAddTask';

const PageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
`;

PageWrapper.displayName = 'PageWrapper';

const PageTitle = styled.h1`
    padding: 10px 20px;
    text-align: center;
    border-bottom: 1px solid #d3d3d3;
`;

PageTitle.displayName = 'PageTitle';

function Page() {
    return (
        <PageWrapper>
            <PageTitle>Lista zadań</PageTitle>
            <PageContent />
            <PageMenu />
            <PopupAddTask />
        </PageWrapper>
    )
}

export default Page;
