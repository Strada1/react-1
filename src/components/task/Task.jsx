import React from 'react';
import PropTypes from 'prop-types';
import { TASK_STATUS } from '../../services/const';

function Task(props) {
  const {
    taskData: { status, text, id },
    deleteTask,
    changeStatus,
  } = props;

  const classNamePriority =
    status === TASK_STATUS.DONE
      ? 'to-do__task-block  task-block task-block__done'
      : 'to-do__task-block  task-block';
  return (
    <div className={classNamePriority}>
      <div className='task-block__label'>
        <input
          onClick={() => changeStatus(id)}
          className='task-block__checked'
          type='checkbox'
        />
        <div className='task-block__text'>{text}</div>
      </div>
      <button
        type='button'
        onClick={() => deleteTask(id)}
        className='task-block__close'
      >
        ❌
      </button>
    </div>
  );
}

Task.propTypes = {
  taskData: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default Task;
