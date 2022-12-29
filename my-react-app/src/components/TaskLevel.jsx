import React, { useState } from 'react';
export function TaskAddLevelPriority(props) {
  const [nameTask, setNameTask] = useState('');

  function resetForm(e) {
    e.preventDefault(e);
  }

  function addTaskInState(e) {
    setNameTask(e.target.value);
  }

  return (
    <div className={`task-add ${props.level}`}>
      <form onSubmit={resetForm}>
        <input
          type="text"
          onChange={addTaskInState}
          value={nameTask}
          className={`${props.level}-input input-style`}
          placeholder="Добавить важных дел"
        />
        <button
          type="submit"
          className={`task-plus ${props.level} unique_btn-add `}
          onClick={() => {
            props.addAllTasks(nameTask, props.level);
            setNameTask('');
          }}
        >
          <img src="images/plus.svg" alt="" className={`plus ${props.level}`} />
        </button>
      </form>
    </div>
  );
}
