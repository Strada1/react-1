import TaskField from "../TaskField/TaskField";

const TodoForm = props => {
    return (
        <form className={props.style}>
            <TaskField />
        </form>
    )
}

export default TodoForm;
