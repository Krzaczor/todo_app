import $ from '../../core';
import TasksController from '../components/Tasks/controller';

let tasks = null;
let menu = null;

class Events {
    constructor(component) {
        menu = component;
        tasks = component;
    }

    refreshView(tasksAll) {
        const list = document.querySelector(".list");
        const task = document.querySelector(".task");

        list.innerHTML = null;
        task.innerHTML = null;

        list.appendChild($("fragment",
            $(tasks).showItemUpdated(tasksAll)
        ));

        task.appendChild($("fragment",
            $(tasks).showOneUpdated(tasksAll),
            $(tasks).add()
        ));

        $(Events, {}).showIndex();
    }

    createTask() {
        const content = document.querySelector('.task-field').value.trim();
        let result = null;

        if (!content) return;
        
        result = $(TasksController).create(content);
        $(Events, {}).refreshView(result.tasks.all);
    }

    removeTask() {
        const result = $(TasksController).remove(this.dataset.id);
        $(Events, {}).refreshView(result.tasks.all);
    }

    doneTask() {
        const result = $(TasksController).done(this.dataset.id);
        $(Events, {}).refreshView(result.tasks.all);
    }

    showIndex() {
        const navbar = document.querySelector('.navbar');
        const list = document.querySelector('.list');
        const taskAdd = document.querySelector('.task-add');
        const taskAll = document.querySelectorAll('.task-item');

        list.classList.remove("list-action__show");
        taskAdd.classList.remove('show');
        taskAll.forEach(item => item.classList.remove("show"));

        navbar.innerHTML = null;
        navbar.appendChild($(menu, {}).index());
    }

    showAction() {
        const navbar = document.querySelector('.navbar');
        const list = document.querySelector('.list');

        list.classList.add("list-action__show");
        
        navbar.innerHTML = null;
        navbar.appendChild($(menu, {}).action());
    }

    showAdd() {
        const navbar = document.querySelector('.navbar');
        const taskAdd = document.querySelector('.task-add');

        taskAdd.classList.add('show');

        navbar.innerHTML = null;
        navbar.appendChild($(menu, {}).add());
    }

    showOne() {
        const taskId = this.dataset.id;
        const taskDone = this.dataset.done;    
        const navbar = document.querySelector('.navbar');
        const taskOne = document.querySelector(`#${taskId}`);

        taskOne.classList.add("show");

        navbar.innerHTML = null;
        navbar.appendChild($(menu, {id: taskId, done: taskDone}).one());
    }
}

export default Events;
