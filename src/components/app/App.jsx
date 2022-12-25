import './app.sass';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../header/Header';
import List from '../list/List';
import { TASK_PRIORITY, TASK_STATUS } from '../../services/const';
import { tasksName, updateLocalStorage } from '../../services/localStorage';

const priorityList = [TASK_PRIORITY.HIGH, TASK_PRIORITY.LOW];

function App() {
  const [allTasks, setAllTasks] = useState([]);

  function addTask(text, priority) {
    const task = {
      status: TASK_STATUS.IN_PROGRESS,
      text,
      priority,
      id: uuidv4(),
    };
    updateLocalStorage(tasksName, [task, ...allTasks]);
    setAllTasks([task, ...allTasks]);
  }

  const deleteTask = (id) => {
    const delList = allTasks.filter((task) => task.id !== id);
    setAllTasks([...delList]);
    updateLocalStorage(tasksName, [...delList]);
  };

  const changeStatus = (id) => {
    const changelist = allTasks.map((task) => {
      if (task.id === id) {
        const status =
          task.status === TASK_STATUS.IN_PROGRESS
            ? TASK_STATUS.DONE
            : TASK_STATUS.IN_PROGRESS;
        return { ...task, status };
      }
      return task;
    });
    updateLocalStorage(tasksName, [...changelist]);
    setAllTasks(() => [...changelist]);
  };

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      try {
        setAllTasks(JSON.parse(tasks));
      } catch (e) {
        throw new Error('Bad JSON');
      }
    }
  }, []);

  return (
    <div className='to-do'>
      {priorityList.map((priority) => (
        <div key={priority} className='to-do__priority'>
          <Header
            taskPriority={priority}
            addTask={(text, priorityTask) => addTask(text, priorityTask)}
          />
          <List
            changeStatus={changeStatus}
            allTasks={allTasks}
            deleteTask={deleteTask}
            taskPriority={priority}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
