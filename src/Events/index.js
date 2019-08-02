import $ from '../../core';

let tasks = null;
let menu = null;

class Events {
    constructor(component) {
        if (component.name === "Menu" && menu === null) menu = component;
        if (component.name === "Tasks" && tasks === null) tasks = component;
    }

    createTask() {}

    removeTask() {}

    doneTask() {}

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