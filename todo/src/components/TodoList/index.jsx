import React from 'react';
import TasksList from '../TasksList';
import {
  StyledTodoList,
  PriorityTitle,
  ListByPriority
} from './styled';


const TodoList = ({tasks, priorities, deleteTask, changeStatus}) => {
  if (!tasks.length || !priorities) {
    return <h3>Задач нет.</h3>;
  }

  const priorityList = Object.keys(priorities);

  return (
    <StyledTodoList>
      {priorityList.map((priorityKey) => {
        const priority = priorities[priorityKey];
        const tasksByPriority = tasks.filter((task) => task.priority === priority.value);

        if (!tasksByPriority || !tasksByPriority.length) {
          return null;
        }

        return (
          <ListByPriority key={priorityKey}>
            <PriorityTitle>
              {priority.title}
            </PriorityTitle>
            <TasksList
              deleteTask={deleteTask}
              changeStatus={changeStatus}
              tasks={tasksByPriority}
              priority={priority.value}
            />
          </ListByPriority>
        )})
      }
    </StyledTodoList>
  );
};

export default TodoList;
