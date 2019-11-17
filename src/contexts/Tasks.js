import React from 'react';

export const Tasks = React.createContext({
    tasks: [],
    addTask() {},
    doneTask() {},
    removeTask() {},
});

Tasks.displayName = "Tasks";
