import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { examination } from './examination.js';
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from './localStarage/localStorage.js';
import { ResultBlock } from './ResultBlock';
import { Form } from './Form';

const BlockPriority = ['high', 'low'];

export function Todo() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const ls = localStorage ? getLocalStorageItem('AllTodoLists') : [];
    console.log('useEffect');
    setAllTasks(ls);
  }, []);

  function changeStatus(nameTask, statusName) {
    const index = examination(nameTask, allTasks);
    const newTasks = JSON.parse(JSON.stringify(allTasks));
    newTasks[index].status = statusName;
    setAllTasks([...newTasks]);
    setLocalStorageItem('AllTodoLists', newTasks);
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
      {BlockPriority.map((item, index) => {
        return (
          <div key={index} className="">
            <h2
              className={`title-${item} ${
                item === 'low' ? ' title-high' : false
              }`}
            >
              {item}
            </h2>
            <div className="task-add-block">
              <Form level={`${item}`} addAllTasks={addTasks} />
            </div>
            <ResultBlock
              allTasks={allTasks}
              level={`${item}`}
              deleteTaskHandler={deleteTaskHandler}
              changeStatus={changeStatus}
            />
          </div>
        );
      })}
    </div>
  );
}
