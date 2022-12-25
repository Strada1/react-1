import React from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { COMPONENTS_STYLE, TASK_PRIORITY } from './js/constants';
import { addTaskToStorage, removeTaskFromStorage, getTasksFilteredByPriority } from './js/storage';
import './App.css';
import './components/TaskForm/TaskForm.css';
import './components/TaskItem/TaskItem.css';
import './components/TaskList/TaskList.css';

function App() {
  const storedTasksHigh = getTasksFilteredByPriority(TASK_PRIORITY.HIGH);
  const storedTasksLow = getTasksFilteredByPriority(TASK_PRIORITY.LOW);
  const [tasksHigh, setTasksHigh] = useState(storedTasksHigh);
  const [tasksLow, setTasksLow] = useState(storedTasksLow);

  function addTask(input, priority) {
    addTaskToStorage(input, priority);
    updateStates();
  }

  function removeTask(id) {
    removeTaskFromStorage(id);
    updateStates();
  }

  function updateStates() {
    const updatedTasksHigh = getTasksFilteredByPriority(TASK_PRIORITY.HIGH);
    setTasksHigh(updatedTasksHigh);
    const updatedTasksLow = getTasksFilteredByPriority(TASK_PRIORITY.LOW);
    setTasksLow(updatedTasksLow);
  }

  return (
    <div>
      <div>High({tasksHigh.length})</div>
      <TaskForm
        className={COMPONENTS_STYLE.TASK_FORM.default}
        addTask={addTask}
        priority={TASK_PRIORITY.HIGH}
      />
      <TaskList
        className={COMPONENTS_STYLE.TASK_LIST.default}
        tasks={tasksHigh}
        removeTask={removeTask}
      />
      <div>Low({tasksLow.length})</div>
      <TaskForm
        className={COMPONENTS_STYLE.TASK_FORM.default}
        addTask={addTask}
        priority={TASK_PRIORITY.LOW}
      />
      <TaskList
        className={COMPONENTS_STYLE.TASK_LIST.default}
        tasks={tasksLow}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
