import React from 'react';
import './TaskCategoryRow.css';
import { AddTask } from '../AddTask/AddTask';


class TaskCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <div> 
          <div class="title">
            {category}
          </div>
          <div>
            <AddTask />
          </div>   
        </div>
      );
    }
  }

export  { TaskCategoryRow };