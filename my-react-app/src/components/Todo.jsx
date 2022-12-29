import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { examination } from './examination.js';
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from './localStarage/localStorage.js';
import { ResultBlock } from './ResultBlock';
import { TaskAddLevelPriority } from './TaskLevel';

export function Todo() {
  const ls =
    localStorage.length === 0 ? [] : getLocalStorageItem('AllTodoLists');
  const [allTasks, setAllTasks] = useState(ls);

  function changeStatus(nameTask, statusName) {
    const index = examination(nameTask, allTasks);
    const newTasks = allTasks;
    if (newTasks[index].name === nameTask) {
      newTasks[index].status = statusName;
      setAllTasks([...newTasks]);
      setLocalStorageItem('AllTodoLists', newTasks);
    }
  }

  function addTasks(nameTask, prior) {
    if (examination(nameTask, allTasks) === -1 && nameTask.trim()) {
      const newTasks = [
        ...allTasks,
        {
          name: nameTask,
          status: 'to do',
          PRIORITY: prior,
          id: nanoid(),
        },
      ];
      setAllTasks(newTasks);
      setLocalStorageItem('AllTodoLists', newTasks);
    } else {
      console.log('Такая задача уже существует');
    }
    return;
  }

  function deleteTaskHandler(id) {
    const newTasks = [...allTasks].filter((item) => item.id !== id);
    setAllTasks(newTasks);
    setLocalStorageItem('AllTodoLists', newTasks);
    return;
  }

  return (
    <div className="Todo">
      <h2 className="title-high">HIGH</h2>
      <div className="task-add-block">
        <TaskAddLevelPriority level="high" addAllTasks={addTasks} />
      </div>
      <ResultBlock
        allTasks={allTasks}
        level="high"
        deleteTaskHandler={deleteTaskHandler}
        changeStatus={changeStatus}
      />
      <h2 className="title-high title-low">LOW</h2>
      <div className="task-add-block">
        <TaskAddLevelPriority level="low" addAllTasks={addTasks} />
      </div>
      <div className="low-block">
        <ResultBlock
          allTasks={allTasks}
          level="low"
          deleteTaskHandler={deleteTaskHandler}
          changeStatus={changeStatus}
        />
      </div>
    </div>
  );
}
