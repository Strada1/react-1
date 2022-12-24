import './app.sass';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../header/Header';
import List from '../list/List';
import { TASK_PRIORITY, TASK_STATUS } from '../../services/const';

function App() {
  const [allTasks, setAllTasks] = useState([]);

  function addTask(text, priority) {
    const task = {
      status: TASK_STATUS.IN_PROGRESS,
      text,
      priority,
      id: uuidv4(),
    };
    setAllTasks([task, ...allTasks]);
  }

  const deleteTask = (id) => {
    const delList = allTasks.filter((task) => task.id !== id);
    setAllTasks([...delList]);
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
    setAllTasks(() => [...changelist]);
  };

  return (
    <div className='to-do'>
      <div className='to-do__priority'>
        <Header
          taskPriority={TASK_PRIORITY.HIGH}
          addTask={(text, priority) => addTask(text, priority)}
        />
        <List
          changeStatus={changeStatus}
          allTasks={allTasks}
          deleteTask={deleteTask}
          taskPriority={TASK_PRIORITY.HIGH}
        />
      </div>

      <div className='to-do__priority'>
        <Header
          taskPriority={TASK_PRIORITY.LOW}
          addTask={(text, priority) => addTask(text, priority)}
        />
        <List
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          allTasks={allTasks}
          taskPriority={TASK_PRIORITY.LOW}
        />
      </div>
    </div>
  );
}

export default App;
