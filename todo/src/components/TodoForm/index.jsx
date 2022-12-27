import React, { useState } from 'react';
import Input from '../UI/Input';
import { Task } from '../../modules/tasks';
import {
  StyledForm,
  InputContainer,
  SelectContainer,
  PrioritySelect,
  ButtonContainer,
  StyledAddButton
} from './styled';

const SELECT_DEFAULT_VALUE = 'Важность';

const getSelectOptions = (priorities) => {
  const options = [];
  const priorityKeys = Object.keys(priorities);
  priorityKeys.forEach((priorityKey) => options.push(priorities[priorityKey]));

  return options;
};

const TodoForm = ({priorities, onSubmit, className}) => {
  const TASK_DEFAULT_VALUE = new Task('', priorities.HIGH.value);

  const [task, setTask] = useState(TASK_DEFAULT_VALUE);
  const selectOptions = getSelectOptions(priorities);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task.name.trim().length) {
      return null;
    }

    const newTask = {
      ...task,
      id: Date.now()
    };

    onSubmit(newTask);
    setTask(TASK_DEFAULT_VALUE);
  };

  const handleTaskChange = (event) => {
    const name = event.target.value;
    setTask({...task, name});
  };

  const handleChangePriority = (priority) => {
    setTask({...task, priority});
  };

  return (
    <StyledForm onSubmit={handleSubmit} className={className}>
      <InputContainer>
        <Input
          onChange={handleTaskChange}
          value={task.name}
          type="text"
          placeholder="Добавить дело"
        />
      </InputContainer>

      <SelectContainer>
        <PrioritySelect
          options={selectOptions}
          defaultValue={SELECT_DEFAULT_VALUE}
          value={task.priority}
          onChange={handleChangePriority}
        />
      </SelectContainer>

      <ButtonContainer>
        <StyledAddButton
          action="add"
          type="submit"
        />
      </ButtonContainer>
    </StyledForm>
  );
};

export default TodoForm;
