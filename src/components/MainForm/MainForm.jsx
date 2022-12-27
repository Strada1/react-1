import React, { useState } from 'react'
import BlockWithTask from '../BlockWithTask/BlockWithTask'
import './styleMainForm.css'
import idGenerator from '../../functions/idGenerator'

function MainForm() {
  const [tasks, setTasks] = useState([
    { text: 'Сделать задание', status: 'completed', priority: 'high', id: 1 },
    { text: 'покушать', status: 'notCompleted', priority: 'low', id: 2 },
  ])

  const idGenForThis = () => idGenerator(tasks)

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    const newTasks = [...tasks]
    const newTasksWithoutRemote = newTasks.filter((task) => task.id !== id)
    setTasks(newTasksWithoutRemote)
  }
  const changeStatus = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: item.status === 'completed' ? 'notCompleted' : 'completed',
          }
        }
        return item
      })
    )
  }
  return (
    <div>
      <pre>{JSON.stringify(tasks, false, 2)}</pre>
      <div className="block-main-wrapper">
        <div className="form-main">
          <BlockWithTask
            massive={tasks.filter((task) => task.priority === 'high')}
            addTask={addTask}
            deleteTask={deleteTask}
            idGenForThis={idGenForThis}
            priorityText="High"
            changeStatus={changeStatus}
            priorityForObj="high"
          />
          <BlockWithTask
            massive={tasks.filter((task) => task.priority === 'low')}
            addTask={addTask}
            deleteTask={deleteTask}
            idGenForThis={idGenForThis}
            priorityText="Low"
            changeStatus={changeStatus}
            priorityForObj="low"
          />
        </div>
      </div>
    </div>
  )
}

export default MainForm
