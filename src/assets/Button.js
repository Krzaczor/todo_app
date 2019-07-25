import $ from '../../core';

class Button {
    constructor({text}) {
        this.state = {
            text
        }
    }
    
    render() {
        return $("button", {className: "btn"}, this.state.text);
    }
}

export default Button;