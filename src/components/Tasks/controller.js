import Memory from '../../memory';
import $ from '../../../core';

const chars = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'y', 'v', 'x', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'Y', 'V', 'X', 'Z'
]

class Tasks {
    constructor() {
        this.tasks = $(Memory).get();
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

                for (let i = 1; i < 15; i += 1) {
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
        $(Memory).set(this.tasks);

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
        $(Memory).set(this.tasks);

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
        $(Memory).set(this.tasks);

        return {
            tasks: {
                currentDoned: taskObject,
                all: this.getAll()
            }
        };
    }
}

export default Tasks;
