import React from 'react';
import Moment from 'react-moment';

import ItemTime from '../assets/List/Item/Time';

function TimeTask(props) {
    return (
        <ItemTime>
            <Moment format="DD.MM.YYYY kk:mm">{props.time}</Moment>
        </ItemTime>
    );
}

export default TimeTask;
