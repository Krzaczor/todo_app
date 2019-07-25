import $ from '../../core';
import Tasks from '../actions/tasksList';
import Task from './Task';

class List {
    constructor() {
        this.state = {
            list: []
        }
    }

    didAction() {
        this.state.list = $(Tasks).getAll();
    }

    showList() {
        return this.state.list.map((task) => {
            return $("li", {className: "list-item"},
                $(Task, task)
            )
        })
    }

    render() {
        return (
            $("ul", {className: "list"},
                this.showList()
            )
        )
    }
}

export default List;