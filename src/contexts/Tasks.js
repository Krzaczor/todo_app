import React from 'react';

export const Tasks = React.createContext({
    tasks: [],
    tasksEdit: [],
    addTask() { },
    doneTask() { },
    doneTasks() { },
    removeTask() { },
    removeTasks() { },
    toggleTaskEdit() { },
    resetTaskEdit() { }
});

Tasks.displayName = "Tasks";
