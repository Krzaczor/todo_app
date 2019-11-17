import React from 'react';

export const Actions = React.createContext({
    add: false,
    edit: false,
    toggleAdd() {},
    toggleEdit() {},
    resetActions() {}
});

Actions.displayName = "Actions";
