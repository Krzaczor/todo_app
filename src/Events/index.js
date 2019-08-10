import $ from '../../core';
import TasksController from '../components/Tasks/controller';

const views = {
    menu: null,
    tasks: null
}

class Events {
    constructor(component) {         
        if (component.menu && views.menu === null) views.menu = component.menu;
        if (component.tasks && views.tasks === null) views.tasks = component.tasks;
    }

    static refreshView(tasksAll) {
        const list = document.querySelector(".list");
        const task = document.querySelector(".task");

        list.innerHTML = null;
        task.innerHTML = null;

        list.appendChild($("fragment",
            $(views.tasks).showItemUpdated(tasksAll)
        ));

        task.appendChild($("fragment",
            $(views.tasks).showOneUpdated(tasksAll),
            $(views.tasks).add()
        ));

        Events.showIndex.call(views.menu);
    }

    static createTask() {
        const content = document.querySelector('.task-field').value.trim();
        let result = null;

        if (!content) return;
        
        result = $(TasksController).create(content);
        Events.refreshView(result.tasks.all);
    }

    static removeTask(id) {
        const result = $(TasksController).remove(id);
        Events.refreshView(result.tasks.all);
    }

    static doneTask(id) {
        const result = $(TasksController).done(id);
        Events.refreshView(result.tasks.all);
    }

    static showIndex() {
        const navbar = document.querySelector('.navbar');
        const list = document.querySelector('.list');
        const taskAdd = document.querySelector('.task-add');
        const taskAll = document.querySelectorAll('.task-item');

        list.classList.remove("list-action__show");
        taskAdd.classList.remove('show');
        taskAll.forEach(item => item.classList.remove("show"));

        navbar.innerHTML = null;
        navbar.appendChild($(this).index());
    }

    static showAction() {
        const navbar = document.querySelector('.navbar');
        const list = document.querySelector('.list');

        list.classList.add("list-action__show");
        
        navbar.innerHTML = null;
        navbar.appendChild($(this).action());
    }

    static showAdd() {
        const navbar = document.querySelector('.navbar');
        const taskAdd = document.querySelector('.task-add');

        taskAdd.classList.add('show');
    
        navbar.innerHTML = null;
        navbar.appendChild($(this).add());
    }

    static showOne(id) {
        const navbar = document.querySelector('.navbar');
        const taskOne = document.querySelector(`#${id}`);

        taskOne.classList.add("show");
        
        navbar.innerHTML = null;
        navbar.appendChild($(views.menu).one(id));
    }
}

export default Events;
