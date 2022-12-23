import React from 'react'
import Task from './Task'
import taskList from './const'


function List() {
  const isDone = 'Done';

  return (
    <>
        <div className='header'>
            <span>В ожидании:</span><span>Выполнено:</span>
        </div>
        <div className='container'>
            <ol className='MustDo'> {taskList.map(task => {
              return (task.progress !== isDone) &&
              <Task task={task} key={task.id}/>
            })}</ol>

            <ol className='Done'> {taskList.map(task => {
              return (isDone === task.progress) &&
              <Task task={task} key={task.id}/>
            })}</ol>
        </div>
    </>
  )
}

export default List