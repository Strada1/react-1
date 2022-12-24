import React from 'react';
import './list.sass';
import Task from '../task/Task';

function List(props) {
  const { taskPriority, allTasks, deleteTask, changeStatus } = props;
  const className = `list_${taskPriority}`;
  const FilteredPriority = allTasks.filter(
    (taskData) => taskData.priority === taskPriority
  );
  const taskList = FilteredPriority.map((taskData) => (
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
