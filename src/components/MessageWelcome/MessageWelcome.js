import styled from 'styled-components';
import Message from './Message';
import Quotation from './Quotation';

const MessageWelcomeWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 1em;
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

MessageWelcomeWrapper.displayName = 'MessageWelcome';

function MessageWelcome() {
    return (
        <MessageWelcomeWrapper>
            <Message />
            <Quotation />
        </MessageWelcomeWrapper>
    );
}

export default MessageWelcome;
