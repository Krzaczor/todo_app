import React from 'react';

import Menu         from '../components/Menu';
import Content      from '../components/Content';

import TitlePage    from '../assets/TitlePage';

function Page() {
    return (
        <>
            <TitlePage>Lista zadań</TitlePage>
            <Content />
            <Menu />
        </>
    )
}

export default Page;
