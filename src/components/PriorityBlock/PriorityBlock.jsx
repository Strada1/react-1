import './PriorityBlock.css'
import Task from '../Task/Task'
import {TASKS} from '../../constans'

const PriorityBlock = ({priority, tasks, setTasks, header}) => {

    const filterTask = (array, priority) => array.filter((item) => item.priority === priority)

    const deleteTask = id => {
        const newTask = [...tasks].filter(item => item.id !== id);
        setTasks(newTask);
    }

    const changeStatus = id => {
        const newTask = [...tasks.filter(item => {
            if (item.id === id) {
                item.isDone = !item.isDone
            }
            return item
        })]
        console.log(newTask);
        setTasks(newTask);
    }

    return (
        <div className='priority-block'>
            <h3 className='head_3'>{header}</h3>

            {
                priority === TASKS.PRIORITY_HIGH ?
                filterTask(tasks, TASKS.PRIORITY_HIGH).map((task, id) => {
                        return  <Task
                            key={id}
                            text={task.text}
                            status={+task.isDone}
                            id={task.id}
                            onDelete={() => deleteTask(task.id)}
                            changeStatus = {() => changeStatus(task.id)}
                        />
                    })

                    :
                    filterTask(tasks, TASKS.PRIORITY_LOW).map((task, id) => {
                        return  <Task
                            key={id}
                            text={task.text}
                            status={+task.isDone}
                            id={task.id}
                            onDelete={() => deleteTask(task.id)}
                            changeStatus = {() => changeStatus(task.id)}
                        />
                    })

            }

        </div>

    )
}

export default PriorityBlock;
