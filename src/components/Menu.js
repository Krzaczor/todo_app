import $ from '../../core';
import Button from '../assets/Button';

class Menu {
    render() {
        return (
            $("div", {className: "navbar"},
                $(Button, {text: "zarządzaj"}),
                $(Button, {text: "dodaj"}) 
            )
        )
    }
}

export default Menu;