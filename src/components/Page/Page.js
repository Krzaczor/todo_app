import styled from 'styled-components';

import Menu from './Menu/Menu';
import Content from './Content/Content';
import Title from './Title/Title';
import PopupAddingTask from '../Popup/AddingTask';

const PageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
`;

PageWrapper.displayName = 'PageWrapper';

function Page() {
    return (
        <PageWrapper>
            <Title />
            <Content />
            <Menu />
            <PopupAddingTask />
        </PageWrapper>
    )
}

export default Page;
