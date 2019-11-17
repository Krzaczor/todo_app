import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import DefaultView from './views/DefaultView';
import TaskView from './views/TaskView';

import ActionsContext from './contexts/ActionsContext';
import TasksContext from './contexts/TasksContext';
import TasksEditContext from './contexts/TasksEditContext';

function App() {
    return (
        <TasksContext>
            <TasksEditContext>
                <ActionsContext>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <DefaultView />
                            </Route>
                            <Route path="/:id">
                                <TaskView />
                            </Route>
                        </Switch>
                    </Router>
                </ActionsContext>
            </TasksEditContext>
        </TasksContext>
    );
}

export default App;
