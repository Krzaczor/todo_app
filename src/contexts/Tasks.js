import React from 'react';

export const Tasks = React.createContext({
    tasks: [],
    addTask() { },
    doneTasks() { },
    removeTasks() { },
});

Tasks.displayName = "Tasks";
