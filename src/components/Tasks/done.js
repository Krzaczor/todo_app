import $ from '../../../core';

class Done {
    render() {
        return (
            $("span", {className: "btn-action btn__done icon-ok"}, 
                $("span", {className: "sr-only"}, "wykonane")
            )
        )
    }
}

export default Done;
