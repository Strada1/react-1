import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList';
import Error from '../Error';
import { listPriority, Tasks } from '../../modules/tasks';
import { Storage } from '../../modules/localstorage';
import { errorMessages } from '../../modules/error';
import {
  TodoAppContainer,
  TodoTitle,
  StyledTodoForm
} from './styled';

const DEFAULT_TASKS_LIST = [];
const DEFAULT_ERROR_VALUE = null;

const App = () => {
  const [tasks, setTasks] = useState(DEFAULT_TASKS_LIST);
  useEffect(() => {
    const [loadedTasks, storageError] = Storage.getFromStorage();

    if (storageError) {
      setError(storageError);
    }

    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  const [error, setError] = useState(DEFAULT_ERROR_VALUE);
  useEffect(() => {
    let timer;

    if (error) {
      timer = setTimeout(() => {
        setError(DEFAULT_ERROR_VALUE);
      }, 5000);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [error]);

  const deleteTask = (task) => {
    const updatedTasks = Tasks.deleteTask(tasks, task);
    setTasks(updatedTasks);
    const storageError = Storage.saveToStorage(updatedTasks);
    storageError && setError(storageError);
  };

  const changeStatus = (task) => {
    const taskIndex = tasks.findIndex((taskItem) => taskItem.id === task.id);
    const newTask = {...tasks[taskIndex]};
    const newTasks = [...tasks];
    Tasks.changeStatus(newTask);
    newTasks.splice(taskIndex, 1, newTask)
    setTasks(newTasks);
    const storageError = Storage.saveToStorage(newTasks);
    storageError && setError(storageError);
  };

  const addTask = (task) => {
    const isTaskExsist = !!Tasks.findTask(tasks, task);
    if (isTaskExsist) {
      setError(errorMessages.TASK_EXISTS);
    } else {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      const storageError = Storage.saveToStorage(updatedTasks);
      storageError && setError(storageError);
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
