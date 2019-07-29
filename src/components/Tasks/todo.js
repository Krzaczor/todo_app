import $ from '../../../core';

class Todo {
    constructor(id) {
        this.state = {
            id
        }
    }

    render() {
        return (
            $("button", 
                {
                    className: "btn btn-action icon-ok",
                    data: [
                        ["id", this.state.id],
                        ["type", "done"]
                    ]
                }, 
                $("span", {className: "sr-only"}, "oznacz jako zrobione")
            )
        )
    }
}

export default Todo;