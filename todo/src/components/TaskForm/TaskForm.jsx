import React from 'react';
import { useState } from 'react';
import { closeIcon } from '../../assets/images';
import { ELEMENTS_TYPES } from '../../js/constants';

function TaskForm(props) {
  const { addTask, className, priority } = props;
  const [taskInput, setTaskInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskInput === '') {
      return;
    }
    addTask(taskInput, priority);
    setTaskInput('');
  }

  function handleChange(e) {
    setTaskInput(e.target.value);
  }

  return (
    <form className={className} onSubmit={(e) => handleSubmit(e)}>
      <input type={ELEMENTS_TYPES.INPUT.text} value={taskInput} onChange={(e) => handleChange(e)} />
      <input type={ELEMENTS_TYPES.INPUT.image} src={closeIcon} />
    </form>
  );
}

export default TaskForm;
