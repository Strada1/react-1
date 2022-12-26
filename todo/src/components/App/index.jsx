import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList';
import Error from '../Error';
import { listPriority, Tasks } from '../../modules/tasks';
import { Storage } from '../../modules/localstorage';
import {
  TodoAppContainer,
  TodoTitle,
  StyledTodoForm
} from './styled';


const getTasksList = () => Storage.getFromStorage() || [];

const App = () => {
  const [tasks, setTasks] = useState(getTasksList());
  useEffect(() => {
    Storage.saveToStorage(tasks);
  }, [tasks]);

  const [error, setError] = useState('');
  useEffect(() => {
    let timer;

    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 5000);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [error]);

  const {width, isMobile, isDesktop} = useScreen();

  const deleteTask = (task) => {
    setTasks(Tasks.deleteTask(tasks, task));
  };

  const changeStatus = (task) => {
    const taskIndex = tasks.findIndex((taskItem) => taskItem.id === task.id);
    const newTask = {...tasks[taskIndex]};
    const newTasks = [...tasks];
    Tasks.changeStatus(newTask);
    newTasks.splice(taskIndex, 1, newTask)
    setTasks(newTasks);
  };

  const addTask = (task) => {
    const isTaskExsist = !!Tasks.findTask(tasks, task);
    if (isTaskExsist) {
      setError('Такая задача уже есть.');
    } else {
      setTasks([...tasks, task]);
    }
  };

  return (
    <TodoAppContainer>
      <TodoTitle>Список дел</TodoTitle>
      <StyledTodoForm
        priorities={listPriority}
        onSubmit={addTask}
      />
      <Error message={error} />
      <TodoList
        tasks={tasks}
        priorities={listPriority}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />
    </TodoAppContainer>
  );
}

export default App;
