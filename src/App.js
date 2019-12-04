import React from 'react';
import styled from 'styled-components';
import Page from './components/Page';

const RootWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

function App() {
    return (
        <RootWrapper>
            <Page />
        </RootWrapper>
    );
}

export default App;
