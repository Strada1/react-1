import React, { useState } from'react';
import Checkbox from '../UI/Checkbox';
import { listStatuses } from '../../modules/tasks';
import {
  StyledTask,
  ChangeStatusButton,
  DeleteButton
} from './styled';

const Task = (props) => {
  const task = props?.task;

  if(!task) {
    return null;
  }

  const isChecked = task?.status === listStatuses.DONE;

  const handleDeleteTask = () => {
    props?.deleteTask(task);
  };

  const handleChangeStatus = () => {
    props?.changeStatus(task);
  };

  return (
    <StyledTask $isChecked={isChecked} className={props?.className}>
      <ChangeStatusButton>
        <Checkbox
          isChecked={isChecked}
          onChange={handleChangeStatus}
        />
      </ChangeStatusButton>

      <p>{task?.name}</p>

      <DeleteButton
        action="delete"
        onClick={handleDeleteTask}
      />
    </StyledTask>
  );
};

export default Task;
