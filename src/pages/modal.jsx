import React from 'react'
import{ addTask } from '../components/const'

function Modal() {

  return (
    <div className='modal'>
        <form className='newTask' type='submit' onSubmit={addTask}>
        <input type='text' placeholder='введите название задачи'></input>
        <select className='priority'>
            <option>height</option>
            <option>middle</option>
            <option>low</option>
        </select>
        <button type='submit'>Создать</button>
      </form>
    </div>
  )
}

export default Modal