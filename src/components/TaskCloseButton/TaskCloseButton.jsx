import './TaskCloseButton.css'

const TaskCloseButton = ({style, onDelete}) => {
    return (
        <button
            className={style}
            onClick={() => onDelete()}
        >

        </button>
    )
}

export default TaskCloseButton;
