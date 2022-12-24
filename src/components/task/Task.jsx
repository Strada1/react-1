import React from 'react';
import { TASK_STATUS } from '../../services/const';

function Task(props) {
  const {
    taskData: { status, text, priority, id },
    deleteTask,
    changeStatus,
  } = props;

  const classNamePriority =
    status === TASK_STATUS.DONE
      ? 'to-do__task-block  task-block task-block__done'
      : 'to-do__task-block  task-block';
  return (
    <div className={classNamePriority}>
      <label className='task-block__label'>
        <input
          onClick={() => changeStatus(id)}
          className='task-block__checked'
          type='checkbox'
        />
        <div className='task-block__text'>{text}</div>
      </label>
      <div onClick={() => deleteTask(id)} className='task-block__close'>
        ❌
      </div>
    </div>
  );
}

export default Task;
