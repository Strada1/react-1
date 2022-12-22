import React from 'react';
import './formTask.sass'
function FormTask(props) {
  const { taskPriority } = props
  const className = taskPriority === 'low' ? 'list_low': 'list_high'
  const nameTitle = taskPriority === 'low' ? 'low': 'high'
  return (
    <form name={className} className='to-do__form'>
      <div className='to-do__title'>{nameTitle}</div>
      <div className='to-do__button-plus'>➕</div>
      <input
        className='to-do__text-input'
        placeholder='Добавить важных дел'
        type='text'
        name='task_text'
      />
    </form>
  );
}

export default FormTask
