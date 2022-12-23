import React from 'react';
import './list.sass';
import Task from '../task/Task';

function List(props) {
  const { taskPriority } = props;
  const className = taskPriority === 'low' ? 'list_low' : 'list_high';
  return (
    <div id={className} className='to-do__task-list'>
      <Task />
    </div>
  );
}

export default List;
