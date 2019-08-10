import $ from '../../../core';
import Menu from '../Menu';
import Tasks from '../Tasks';

class Page {
    render() {
        return (
            $("fragment",
                $("div", {className: "navbar"}, 
                    $(Menu).render()
                ),
                $("div", {className: "main"},
                    $(Tasks).render()
                )
            )
        )
    }
}

export default Page;
