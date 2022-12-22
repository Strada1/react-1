import './AddTaskButton.css'

const AddTaskButton = props => {
    return (

        <button
            className = {props.style}
        >
            {props.text}
         </button>
    )
}

export default AddTaskButton;
