import $ from '../../../core';
import Menu from '../Menu';
import Tasks from '../Tasks';
import Events from '../../Events';

class Page {
    constructor() {
        $(Events, Page);
    }
    
    menu() {
        return $(Menu, {}).render();
    }

    tasks() {
        return $(Tasks).render();
    }

    render() {
        return (
            $("fragment",
                $("div", {className: "navbar"}, 
                    this.menu(),
                ),
                $("div", {className: "main"},
                    this.tasks()
                )
            )
        )
    }
}

export default Page;
