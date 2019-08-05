const chars = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'y', 'v', 'x', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'Y', 'V', 'X', 'Z'
]

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
        const todo = this.tasks.filter(task => task.done === false);
        const done = this.tasks.filter(task => task.done === true);
        return [ todo, done ].flat();
    }

    get(id) {
        return this.tasks.findIndex(id) || -1;
    }

    create(content) {
        const now = new Date();
        const corectDate = number => number >= 10 ? number : `0${number}`;
        let index = null;

        const findFreeIndex = () => {
            const randomChars = [];
            let repeatIndex = false;

            function indexRepeat(task) {
                return task.id === index; 
            }
            
            do {
                do {
                    randomChars[0] = chars[ Math.floor(Math.random() * 62) ];
                } while (/^[0-9]$/.test(randomChars));

                for (let i = 1; i < 20; i += 1) {
                    randomChars[ i ] = chars[ Math.floor(Math.random() * 62) ];
                }

                index = randomChars.join("");
                repeatIndex = this.get(indexRepeat);
            
            } while (repeatIndex > -1);

            return index;
        }

        const task = {
            id: findFreeIndex(),
            content,
            done: false,
            create: [now.getFullYear(), corectDate(now.getMonth() + 1), corectDate(now.getDate())].join("-")
        };

        this.tasks.push(task);

        return {
            tasks: {
                currentCreated: task,
                all: this.getAll()
            }
        };
    }

    remove(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(taskIndex, taskIndex > -1 ? 1 : 0);

        return {
            tasks: {
                currentRemove: taskIndex,
                all: this.getAll()
            }
        };
    }
  
    done(id) {
        const taskObject = this.tasks.find(task => task.id === id);
        if (taskObject !== undefined) taskObject.done = true;

        return {
            tasks: {
                currentDoned: taskObject,
                all: this.getAll()
            }
        };
    }
}

export default Tasks;
