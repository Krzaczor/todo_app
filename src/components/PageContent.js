import React from 'react';

import { Actions } from '../contexts/Actions';

import Page         from '../components/Page';
import PopupAddTask from '../components/PopupAddTask';

import WrapperPage  from '../assets/WrapperPage';

function PageContent() {
    return (
        <Actions.Consumer>
        {({ add, toggleAdd }) => {
            return (
                <>
                    { add
                        ? <WrapperPage onClick={toggleAdd} add={add}>
                        <Page />
                    </WrapperPage>
                        : <WrapperPage add={add}>
                            <Page />
                        </WrapperPage>
                    }
                    <PopupAddTask />
                </>
            )
        }}
        </Actions.Consumer>
    )
}

export default PageContent;