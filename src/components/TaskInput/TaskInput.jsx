import './TaskInput.css'

const TaskInput = props => {
    return (

        <input
            type={props.type}
            className = {props.style}
            placeholder={props.placeholder}
         />
    )
}

export default TaskInput;
