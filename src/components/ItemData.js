import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';

const ItemButton = styled.button`
    width: 100%;
    border: none;
    text-align: left;
    background-color: transparent;
    cursor: pointer;
`;

ItemButton.displayName = 'ItemButton';

const ItemContent = styled.p`
    font-size: 16px;
`;

ItemContent.displayName = 'ItemContent';

const ItemTime = styled.p`
    color: #2979FF;
    font-size: 12px;
    margin-bottom: 7px;
`;

ItemTime.displayName = 'ItemTime';

function ItemData({ task }) {
    return (
        <ItemButton>
            <ItemTime>
                <Moment format="DD.MM.YYYY kk:mm">{task.create}</Moment>
            </ItemTime>
            <ItemContent>{task.content}</ItemContent>
        </ItemButton>
    )
}

export default ItemData
