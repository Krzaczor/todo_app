import React from 'react';

export const Actions = React.createContext({
    add: false,
    edit: false,
    changeAdd() { },
    changeEdit() { },
    resetActions() { }
});

Actions.displayName = "Actions";
