import styled from 'styled-components';
import Message from './Message';
import Quotation from './Quotation';

const MessageWelcomeWrapper = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 3em;
    text-align: center;
    /* display: flex; */
    /* flex-direction: column;
    align-items: center; */
    /* justify-content: center; */
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
