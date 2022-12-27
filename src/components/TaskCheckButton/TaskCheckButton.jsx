import './TaskCheckButton.css';



const TaskCheckButton = ({ style, id, isChecked}) => {

    return (
        <div className='checkbtn_box'>
            <input
                type='checkbox'
                className={style}
                id={id}
                checked={isChecked.toString()}
                readOnly
            />
            <label htmlFor={id}>

            </label>
       </div>
    )
}

export default TaskCheckButton;
