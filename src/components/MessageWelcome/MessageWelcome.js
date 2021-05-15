import styled from 'styled-components';
import Message from './Message';
import Quotation from './Quotation';

const MessageWelcomeWrapper = styled.div`
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
