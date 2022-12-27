import './TaskInput.css'

const TaskInput = ({type, style, placeholder, changeHandler, value}) => {
    return (

        <input
            type={type}
            className = {style}
            placeholder={placeholder}
            onChange={e => changeHandler(e)}
            value={value}
         />
    )
}

export default TaskInput;
