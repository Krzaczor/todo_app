import React from 'react';
import styled from 'styled-components';

import ItemCheckbox from './ItemCheckbox';
import ItemData from './ItemData';

// import { Tasks } from '../contexts/Tasks';
import { Actions } from '../contexts/Actions';

const ListItem = styled.li`
    border-bottom: 1px solid lightgray;
    padding: 15px 0;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
`;

ListItem.displayName = 'ListItem';

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    transition: transform 0.10s linear, width 0.10s linear;
    overflow: hidden;
    
    width: ${props => props.done ? !props.edit ? 'calc(100% + 5px)' : 'calc(100% - 45px)' : 'calc(100% + 55px)'};
    transform: ${props => !props.edit ? 'translateX(-55px)' : 'translateX(0)'};
`;

ItemWrapper.displayName = 'ItemWrapper';

const ItemDone = styled.div`
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);

    &:before {
        content: '';
        display: block;
        transform: rotate(45deg);
        height: 20px;
        width: 10px;
        border-bottom: 2px solid #2979FF;
        border-right: 2px solid #2979FF;
    }
`;

ItemDone.displayName = 'ItemDone';

class OnceTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        }
    }

    changeIsClick = () => {
        this.setState(prevState => ({ isClick: !prevState.isClick }));
    }

    render() {
        const task = this.props.task;

        return (
            <Actions.Consumer>
                {({ edit }) => (
                    <ListItem>
                        <ItemWrapper edit={edit} done={task.done}>
                            <ItemCheckbox isClick={this.state.isClick} changeIsClick={this.changeIsClick} />
                            <ItemData task={task} />
                        </ItemWrapper>
                        {task.done && <ItemDone />}
                    </ListItem>
                )}
            </Actions.Consumer>

        )
    }
}

export default OnceTask;
