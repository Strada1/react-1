import { useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { List } from '../Components/List'
import { Storage } from './Storage'
import '../styles/ToDo.css'
import { PRIORITY, header } from './Const'

//ToDo не финальная версия, что успел то отрефачил и исправил, сильно не ругайте..
function ToDo() {
    const [value, setValue] = useState({
        highInput: '',
        lowInput: '',
    })
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks'))
    )

    useEffect(() => {
        Storage('set', 'tasks', tasks)
    }, [tasks])

    function newTask(e) {
        e.preventDefault()
        e.target.className === 'add-task-form-high'
            ? setTasks([
                  ...tasks,
                  {
                      id: Date.now(),
                      title: value.highInput,
                      priority: PRIORITY.HIGH,
                      done: false,
                  },
              ])
            : setTasks([
                  ...tasks,
                  {
                      id: Date.now(),
                      title: value.lowInput,
                      priority: PRIORITY.LOW,
                      done: false,
                  },
              ])
        setValue({ highInput: '', lowInput: '' })
    }
    function removeTask(e) {
        e.preventDefault()
        const currentTask = e.target.attributes.label.nodeValue
        setTasks(tasks.filter((task) => task.id != currentTask))
    }

    return (
        <div>
            <Header
                header={header[0]}
                getValue={(e) =>
                    setValue({ ...value, highInput: e.target.value })
                }
                value={value.highInput}
                newTask={newTask}
            />
            <List
                tasks={tasks}
                priority={PRIORITY.HIGH}
                removeTask={removeTask}
            />
            <Header
                header={header[1]}
                getValue={(e) =>
                    setValue({ ...value, lowInput: e.target.value })
                }
                value={value.lowInput}
                newTask={newTask}
            />
            <List
                tasks={tasks}
                priority={PRIORITY.LOW}
                removeTask={removeTask}
            />
        </div>
    )
}

export { ToDo }
