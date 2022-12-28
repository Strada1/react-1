import React from 'react';
import './TaskRow.css';
import { CloseButton } from '../CloseButton/CloseButton';


class TaskRow extends React.Component {
    render() {
      const task = this.props.task;
      const name = task.name; 
      return (
        <div class="childContainer">
          <p>
            <input type="checkbox" />
            {' '}
            {name}
            <CloseButton />
          </p>
        </div>
      );
    }
  }

export { TaskRow };