class Memory {
    constructor() {
        this.memory = null;
        this.init();
    }

    init() {
        if (localStorage.getItem("tasks")) {
            this.memory = localStorage.getItem("tasks");
        } else {
            localStorage.setItem("tasks", "[]");
            this.memory = localStorage.getItem("tasks");
        }
    }

    get() {
        return this.decode(this.memory);
    }

    set(list) {
        this.memory = this.encode(list);
        localStorage.setItem("tasks", this.memory);
    }

    decode() {
        return JSON.parse(this.memory);
    }

    encode(list) {
        return JSON.stringify(list);
    }
}

export default Memory;
