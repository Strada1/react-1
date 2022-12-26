import './PriorityBlock.css'
import Task from '../Task/Task'
import {TASKS} from '../../constans'

const PriorityBlock = props => {

    const filterTask = (array, priority) => array.filter((item) => item.priority === priority)


    return (
        <div>
            <h3 className='head_3'>{props.header}</h3>

            {
                props.priority === TASKS.PRIORITY_HIGH ?
                filterTask(props.tasks, TASKS.PRIORITY_HIGH).map((task, id) => {
                        return  <Task
                            key={id}
                            text={task.text}
                            status={task.isDone}
                        />
                    })

                    :
                    filterTask(props.tasks, TASKS.PRIORITY_LOW).map((task, id) => {
                        return  <Task
                            key={id}
                            text={task.text}
                            status={task.isDone}
                        />
                    })

            }

        </div>

    )
}

export default PriorityBlock;
