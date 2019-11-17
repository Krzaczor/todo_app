import React from 'react';

import { Actions } from '../contexts/Actions';

class ActionsContext extends React.Component {
    constructor() {
        super();
        this.state = {
            add: false,
            edit: false,
            toggleAdd: this.toggleAdd,
            toggleEdit: this.toggleEdit,
            resetActions: this.resetActions
        }
    }

    toggleAdd = () => {
        this.setState(prevState => ({
            add: !prevState.add,
            edit: false
        }));
    };

    toggleEdit = () => {
        this.setState(prevState => ({
            add: false,
            edit: !prevState.edit
        }));
    };

    resetActions = () => {
        this.setState({
            add: false,
            edit: false
        })
    }

    render() {
        return (
            <Actions.Provider value={this.state}>
                { this.props.children }
            </Actions.Provider>
        )
    }
}

export default ActionsContext;
