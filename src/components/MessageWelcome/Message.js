import styled from 'styled-components';
import { randomInteger } from '../../helpers/randomInteger';

const MessageText = styled.p`
    margin-bottom: 2em;
`;

MessageText.displayName = 'Message';

const messages = [
    'Brak zadań mój Panie.',
    'Sir, lista zadań jest pusta!',
    'Przed rozpoczęciem zadań należy zebrać myśli.',
];

function Message() {
    const randomIndex = randomInteger(messages.length - 1);
    const randomMessage = messages[randomIndex];

    return <MessageText>{ randomMessage }</MessageText>;
}

export default Message;
