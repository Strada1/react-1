import './TaskCheckButton.css'

const TaskCheckButton = props => {
    return (
        <div className='checkbtn_box'>
            <input
                type='checkbox'
                className={props.style}
                id={props.id}
                defaultChecked = {props.isChecked}

            />
            <label htmlFor={props.id}></label>
       </div>
    )
}

export default TaskCheckButton;
