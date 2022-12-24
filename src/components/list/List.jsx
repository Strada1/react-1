import React from 'react';
import './list.sass';
import PropTypes from 'prop-types';
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

List.propTypes = {
  taskPriority: PropTypes.string.isRequired,
  allTasks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default List;
