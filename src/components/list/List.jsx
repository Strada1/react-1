import React from 'react';
import './list.sass';
import Task from '../task/Task';
import { getFilteredArray } from '../../services/helpers';

function List(props) {
  const { taskPriority, allTasks, deleteTask, changeStatus } = props;
  const className = `list_${taskPriority}`;
  const taskList = getFilteredArray(allTasks, taskPriority).map((taskData) => (
    <Task
      deleteTask={deleteTask}
      changeStatus={changeStatus}
      key={taskData.id}
      taskData={taskData}
    />
  ));
  return (
    <div id={className} className='to-do__task-list'>
      {taskList}
    </div>
  );
}

export default List;
