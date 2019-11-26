import React from 'react';

import PopupWrapper from '../assets/PopupWrapper';
import PopupTitle from '../assets/PopupTitle';
import PopupContent from '../assets/PopupContent';
import PopupControl from '../assets/PopupControl';
import PopupFieldText from '../assets/PopupFieldText';

class PopupAddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    changeValue = (e) => {
        if (e.target.value.trim() !== this.state.value) {
            this.setState({
                value: e.target.value
            });
        }
    }

    resetValue = () => this.setState({ value: "" });

    render() {
        return (
            <PopupWrapper>
                <PopupTitle>Dodawanie zadania</PopupTitle>
                <PopupContent>
                    <PopupFieldText value={this.state.value} onChange={this.changeValue} />
                </PopupContent>
                <PopupControl>
                    <Button>Anuluj</Button>
                    <Button>Utwórz</Button>
                </PopupControl>
            </PopupWrapper>
        )
    }
}

export default PopupAddTask
