import React from 'react';

function Task() {
  return (
    <div className='to-do__task-block  task-block'>
      <label className='task-block__label'>
        <input className='task-block__checked' type='checkbox' />
        <div className='task-block__text'>test</div>
      </label>
      <div className='task-block__close'>❌</div>
    </div>
  );
}

export default Task;
