import $ from "../core";

const users = [
    {id: 1, name: "Anna", age: 38},
    {id: 2, name: "Jan", age: 22}
];

class Header {
    list() {
        return users.map(user => {
            return $("li", {className: "list-item", data: ["id", user.id]}, 
                $("h2", {}, user.name),
                $("p", {}, user.age)
            )
        })
    }

    render() {
        return (
            $("fragment",
                $("ul", {className: "list"}, 
                    this.list()
                )
            )
        )
    }
}

export default new Header;
