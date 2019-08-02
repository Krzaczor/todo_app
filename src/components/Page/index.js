import $ from '../../../core';
import Menu from '../Menu';
import Tasks from '../Tasks';

class Page {
    menu() {
        return $("div", {className: "navbar"}, 
            $(Menu, {}).render()
        )
    }

    tasks() {
        return $("div", {className: "main"},
            $(Tasks).render()
        )
    }

    render() {
        return (
            $("fragment",
                this.menu(),
                this.tasks()
            )
        )
    }
}

export default Page;