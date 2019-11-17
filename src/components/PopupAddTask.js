import React from 'react';

// import nanoid from 'nanoid';

import Button           from  '../assets/Button';
import PopupWrapper     from '../assets/PopupWrapper';
import PopupTitle       from '../assets/PopupTitle';
import PopupContent     from '../assets/PopupContent';
import PopupControl     from '../assets/PopupControl';
import PopupFieldText   from '../assets/PopupFieldText';

import { Actions } from '../contexts/Actions';
import { Tasks } from '../contexts/Tasks';

class PopupAddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        this.clean = this.clean.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    changeValue(e) {
        if (e.target.value !== this.state.value) {
            this.setState({
                value: e.target.value
            });
        }
    }

    clean() {
        this.setState({
            value: ""
        });
    }

    createTask(create, reset) {
        const text = this.state.value.trim()

        if(text !== "") {
            create(text);
            reset();

            this.clean()
        }
    }

    cancelTask = (cancel, reset) => {
        cancel();
        reset();

        this.clean();
    }
    render() {
        return (
            <Tasks.Consumer>
                {({addTask}) => (
                    <Actions.Consumer>
                    {({ add, toggleAdd, resetActions }) => {
                        return (
                            <PopupWrapper add={add}>
                                <PopupTitle>Dodawanie zadania</PopupTitle>
                                    <PopupContent>
                                        <PopupFieldText value={this.state.value} onChange={this.changeValue} />
                                    </PopupContent>
                                    <PopupControl>
                                        <Button onClick={() => { this.cancelTask(toggleAdd, resetActions) }}>Anuluj</Button>
                                        <Button onClick={() => { this.createTask(addTask, resetActions) }}>Utwórz</Button>
                                    </PopupControl>
                            </PopupWrapper>
                        );
                    }}
                    </Actions.Consumer>
                )}
            </Tasks.Consumer>
            
        )
    }
}

export default PopupAddTask
