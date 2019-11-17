import React from 'react';

export const TasksEdit = React.createContext({
    tasksToEdit: new Set(),
    toggleTaskEdit() {},
    resetTaskEdit() {}
});

TasksEdit.displayName = "TasksEdit";
