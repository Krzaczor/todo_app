class Tasks {
    constructor() {
        this.tasks = [
            { id: "j32i1o", content: "kupić odkurzacz", done: true, create: "2019-07-18" },
            { id: "j423io", content: "przeżyć", done: false, create: "1997-01-25" },
            { id: "g423uy", content: "cos tam hehe", done: false, create: "1997-01-25" },
            { id: "gydf78", content: "lubie placki", done: true, create: "1997-01-25" },
            { id: "dasi90", content: "ciekawe czy dobrzegh dfug hdfuigh dfuigh dfui dhasuidh asuidh uiash duias duihasui dasd ash asdhui", done: true, create: "1997-01-25" },
            { id: "gisdf9", content: "ciekawe czy dobrze", done: true, create: "1997-01-25" },
            { id: "jh32ui", content: "huehuehuehuehue", done: false, create: "1997-01-25" },
            { id: "fuds89", content: "ciekawe czy dobrze", done: false, create: "1997-01-25" }
        ]
    }

    getAll() {
        return this.tasks;
    }

    get(id) {
        return this.tasks.findIndex(id) || [];
    }
  
    create(content) {
        const now = new Date();
        const corectDate = number => number >= 10 ? number : `0${number}`;

        const task = {
            id: `a${Math.random()}`,
            content,
            done: false,
            create: `${now.getFullYear()}-${corectDate(now.getMonth())}-${corectDate(now.getDay())}`
        }

        this.tasks.push(task)

        return task;
    }

    remove(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(taskIndex, taskIndex > -1 ? 1 : 0);
    }
  
    done(id) {
        const taskObject = this.tasks.find(task => task.id === id);
        if (taskObject !== undefined) taskObject.done = true;
    }
  
    now() {
        return new Date();
    }
}

export default Tasks;