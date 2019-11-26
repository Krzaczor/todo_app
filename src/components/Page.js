import React from 'react';
import styled from 'styled-components';

import PageMenu from '../components/PageMenu';
import PageContent from '../components/PageContent';

const WrapperPage = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 60px;
`;

WrapperPage.displayName = 'WrapperPage';

const H1 = styled.h1`
    margin: 0 15px;
    padding: 20px 0;
    border-bottom: 1px solid #d3d3d3;
`;

H1.displayName = 'H1';

function Page() {
    return (
        <WrapperPage>
            <H1>Lista zadań</H1>
            <PageContent />
            <PageMenu />
        </WrapperPage>
    )
}

export default Page;
