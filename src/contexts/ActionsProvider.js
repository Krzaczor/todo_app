import React from 'react';

import { Actions } from './Actions';

class ActionsProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            add: false,
            edit: false,
            changeAdd: this.changeAdd,
            changeEdit: this.changeEdit,
            resetActions: this.resetActions
        }
    }

    changeAdd = () => {
        this.setState(prevState => ({
            add: !prevState.add,
            edit: false
        }));
    };

    changeEdit = () => {
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
                {this.props.children}
            </Actions.Provider>
        )
    }
}

export default ActionsProvider;
