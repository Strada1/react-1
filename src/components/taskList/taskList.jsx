import React from 'react';
import './taskList.sass'

function TaskList(props) {
  const { taskPriority } = props
  const className = taskPriority === 'low' ? 'list_low': 'list_high'
  return <div id={className} className='to-do__task-list' />;
}

export default TaskList
