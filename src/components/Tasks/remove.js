import $ from '../../../core';

class Remove {
    constructor(id) {
        this.state = {
            id
        }
    }
    
    render() {
        return (
            $("button",
                {
                    className: "btn btn-action btn__remove icon-remove",
                    data: [
                        ["id", this.state.id],
                        ["action", "remove"],
                    ]
                }, 
                $("span", {className: "sr-only"}, "usuń")
            )
        )
    }
}

export default Remove;