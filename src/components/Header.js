import $ from "../core";

const users = [
    {id: "fjui3", name: "user-1", age: 999},
    {id: "j423io", name: "user-2", age: 1000}
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
