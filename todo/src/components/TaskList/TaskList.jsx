import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { COMPONENTS_STYLE } from '../../js/constants';

function TaskList(props) {
  const { className, tasks, removeTask } = props;

  function handleClick(id) {
    removeTask(id);
  }
  const listToRender = tasks?.map((task) => {
    return (
      <TaskItem
        key={task.id}
        className={COMPONENTS_STYLE.TASK_ITEM.default}
        onClick={() => handleClick(task.id)}>
        {task.text}
      </TaskItem>
    );
  });

  return <ul className={className}>{listToRender}</ul>;
}

export default TaskList;
