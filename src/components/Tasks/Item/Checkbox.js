import { connect } from 'react-redux';
import styled from 'styled-components';
import tasksManagementActions from '../../../store/tasksManagement/actions';

const CheckboxAlias = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid;
    border-color: ${props => props.isClick ? '#2979FF' : 'lightgray'};
    border-radius: 50%;
    position: relative;

    &:hover {
        border-color: #2979FF;
    }

    &:before {
        content: '';
        display: ${props => props.isClick ? 'block' : 'none'};
        position: absolute;
        width: 22px;
        height: 22px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2979FF;
        border-radius: 50%;
    }
`;

CheckboxAlias.displayName = 'CheckboxAlias';

const Label = styled.label`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
`;

Label.displayName = 'Label';

const CheckboxElement = styled.input.attrs({
    type: 'checkbox'
})`
    opacity: 0;
    position: absolute;

    &:focus ~ ${CheckboxAlias} {
        border-color: #2979FF;
    }
`;

CheckboxElement.displayName = 'Checkbox';

function Checkbox({ task, tasksManagement, toggleTasksManagement }) {
    const isClick = tasksManagement.some(id => id === task.id);

    return (
        <Label>
            <CheckboxElement onClick={() => { toggleTasksManagement(task.id) }} />
            <CheckboxAlias isClick={isClick} />
        </Label>
    )
}

const mapStateToProps = (state) => ({
    tasksManagement: state.tasksManagement
});

const mapDispatchToProps = (dispatch) => ({
    toggleTasksManagement: (id) => dispatch(tasksManagementActions.toggleTasksManagement(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
