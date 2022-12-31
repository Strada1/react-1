import React from 'react';
import {
  StyledTasksList,
  StyledTask
} from './styled';

const TasksList = ({deleteTask, changeStatus, tasks, priority}) => {
  return (
    <StyledTasksList>
      {tasks.map((task) => (
        (task.priority === priority) &&
          <StyledTask
            key={task?.id}
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
      ))}
    </StyledTasksList>
  );
};

export default TasksList;
