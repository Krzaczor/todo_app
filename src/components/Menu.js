import $ from '../../core';

class Menu {
    showActionsToTask() {
        document.querySelectorAll(".list-action").forEach(item => {
            item.classList.toggle("show");
        });
    }

    render() {
        return (
            $("div", {className: "navbar"},
                $("button", {className: "btn btn-menu", event: ["click", this.showActionsToTask]}, "zarządzaj"),
                $("button", {className: "btn btn-menu"}, "dodaj") 
            )
        )
    }
}

export default Menu;