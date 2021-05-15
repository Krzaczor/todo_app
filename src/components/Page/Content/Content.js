import { connect } from 'react-redux';
import styled from 'styled-components';

import MessageWelcome from '../../MessageWelcome/MessageWelcome';
import Tasks from '../../Tasks/Tasks';

const MainContent = styled.div`
    padding: 0 15px;
    margin-bottom: 50px;
    overflow: hidden;
    overflow-y: auto;
`;

MainContent.displayName = 'MainContent';

function Content({ tasks }) {
    if (tasks.length === 0) {
        return (
            <MainContent>
                <MessageWelcome />
            </MainContent>
        )
    }

    return (
        <MainContent>
            <Tasks tasks={tasks} />
        </MainContent>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.sort((a, b) => a.create < b.create)
    }
};

export default connect(mapStateToProps, {})(Content);
