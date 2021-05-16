import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import tasksManagementActions from '../../../store/tasksManagement/actions';

const CheckboxWrapper = styled.div`
    margin-right: 20px;
`;

CheckboxWrapper.displayName = 'CheckboxWrapper';

const Label = styled.label`
    width: 40px;
    height: 40px;
    border: 1px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: ${props => props.isActive ? '#2979FF': 'lightgray'};

    &:hover {
        border-color: #2979FF;
    }

    &:after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-color: #2979FF;
        border-radius: 50%;
        transform: ${props => props.isActive ? 'scale(1)': 'scale(0)'};
    }
`;

Label.displayName = 'Label';

const CheckboxElement = styled.input`
    display: none;
`;

CheckboxElement.displayName = 'Checkbox';

class Checkbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isActive: false
        }
    }

    toggleTasksManagementAndActive = () => {
        const { task, toggleTasksManagement } = this.props;

        toggleTasksManagement(task.id);

        this.setState((state) => ({
            isActive: !state.isActive
        }));
    }

    componentDidUpdate = () => {
        if (!this.props.modes.edit && this.state.isActive) {
            this.setState({
               isActive: false 
            });
        }
    }

    render() {
        const { task, modes, } = this.props;
        const { isActive } = this.state;

        return (
            <CheckboxWrapper>
                <CheckboxElement
                    type="checkbox"
                    id={`task-${task.id}`}
                    onClick={this.toggleTasksManagementAndActive}
                />
                <Label
                    isActive={isActive && modes.edit}
                    htmlFor={`task-${task.id}`}
                ></Label>
            </CheckboxWrapper>
        )
    }
}

// function Checkbox({ task, toggleTasksManagement }) {
//     return (
//         <CheckboxWrapper>
//             <CheckboxElement
//                 type="checkbox"
//                 id={`task-${task.id}`}
//                 onClick={toggleTasksManagement(task.id)}
//             />
//             <Label htmlFor={`task-${task.id}`}></Label>
//         </CheckboxWrapper>
//     )
// }

const mapStateToProps = (state) => ({
    modes: state.modes
})

const mapDispatchToProps = (dispatch) => ({
    toggleTasksManagement: (id) => dispatch(tasksManagementActions.toggleTasksManagement(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
