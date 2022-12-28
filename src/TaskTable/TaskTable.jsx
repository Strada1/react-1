import React from 'react';
import './TaskTable.css';
import { TaskCategoryRow } from '../TaskCategoryRow/TaskCategoryRow';
import { TaskRow } from '../TaskRow/TaskRow';
 
class TaskTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.tasks.forEach((task) => {
      if (task.category !== lastCategory) {
        rows.push(
          <TaskCategoryRow
            category={task.category}
            key={task.category} />
        );
      }
      rows.push(
        <TaskRow
          task={task}
          key={task.name} />
      );
      lastCategory = task.category;
    });
    return (  
      <div class="rectangle">
        <h3>TODO List</h3>
        <div>
          {rows}
        </div>
      </div> 
    );
  }
}

export  { TaskTable };