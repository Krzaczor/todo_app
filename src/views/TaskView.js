import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ls from 'local-storage';

import WrapperPage from '../assets/WrapperPage';
import TitlePage from '../assets/TitlePage';
import Navbar from '../assets/Navbar';
import Button from '../assets/Button';
import MainContent from '../assets/MainContent';
// import ItemInfo from '../assets/List/Item/Info';
// import ItemDone from '../assets/List/Item/Done';

import TimeTask from '../components/TimeTask';

import { Tasks } from '../contexts/Tasks';

function taskEvent(id, event, history) {
    event(id);
    history.push("/");
}

function TaskView() {
    const params = useParams();
    const history = useHistory();

    const task = ls.get('tasks').find(task => task.id === params.id);
    
    if (task === undefined) {
        history.push("/");
        return null;
    }

    return (
        <Tasks.Consumer>
        {({doneTask, removeTask}) => (
            <WrapperPage>
                <TitlePage>Zadanie</TitlePage>
                <MainContent style={{paddingTop: '15px'}}>
                    <TimeTask time={task.created} />
                    <pre style={{marginTop: "20px"}}>
                        <p>{ task.content }</p>
                    </pre>
                </MainContent>
                <Navbar>
                    <Button onClick={() => {
                        history.goBack()
                    }}>wróć</Button>
                    { task.done 
                        ? null
                        : <Button onClick={ () => {
                        taskEvent(task.id, doneTask, history)} }>wykonane</Button> }
                    <Button onClick={ () => {
                        taskEvent(task.id, removeTask, history)} }>usuń</Button>
                </Navbar>
            </WrapperPage>
        )}
        </Tasks.Consumer>
    )
}

export default TaskView;
