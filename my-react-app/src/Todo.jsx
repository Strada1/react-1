import React from 'react';
import { TaskAddLevelPriority } from './TaskLevel';

export function Todo() {
  return (
    <div className="Todo">
      <h2 className="title-high">HIGH</h2>
      <div className="task-add-block">
        <TaskAddLevelPriority level="high" />
      </div>
      <div className="high-block unique_block-add"></div>
      <h2 className="title-high title-low">LOW</h2>
      <div className="task-add-block">
        <TaskAddLevelPriority level="low" />
      </div>
      <div className="low-block"></div>
    </div>
  );
}
