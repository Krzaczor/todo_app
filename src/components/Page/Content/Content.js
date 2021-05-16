import { connect } from 'react-redux';

import MessageWelcome from '../../MessageWelcome/MessageWelcome';
import Tasks from '../../Tasks/Tasks';

function Content({ tasks }) {
    if (tasks.length === 0) {
        return <MessageWelcome />;
    }

    return <Tasks tasks={tasks} />;
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.sort((a, b) => a.create < b.create)
    }
};

export default connect(mapStateToProps, null)(Content);
