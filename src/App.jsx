import { useState } from 'react'
import PriorityBlock from './PriorityBlock'

const PRIORITY_HIGH = 'high';
const PRIORITY_MEDIUM = 'medium';
const PRIORITY_LOW = 'low';

const priorities = [PRIORITY_HIGH, PRIORITY_MEDIUM, PRIORITY_LOW];
const todos = [
  {
    priority: PRIORITY_HIGH,
    text: 'grhrhrwhrhrw',
    done: false
  },
  {
    priority: PRIORITY_MEDIUM,
    text: 'njewnfew',
    done: false
  },
  {
    priority: PRIORITY_MEDIUM,
    text: 'njewnfew PRIORITY_MEDIUM',
    done: true
  },
  {
    priority: PRIORITY_LOW,
    text: 'htrwhtrfewvfw',
    done: false
  }
]

function getTasksByPriority(priority) {
  return todos.filter(item => item.priority === priority);
}

function addTask(task) {
  if (containsTask(task)) return;
  todos.push(task);
}

function containsTask(task) {
  return todos.filter(item => item.text === task.text).length > 0;
}

function deleteTask(task) {
  const index = findTask(task);
  if (index < 0) return;
  todos.splice(i, 1);
}

function findTask(task) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].text === task.text) return i;
  }

  return -1;
}

function App(props) {
  const [itemsHigh, setItemsHigh] = useState(getTasksByPriority(PRIORITY_HIGH));
  const [itemsMedium, setItemsMedium] = useState(getTasksByPriority(PRIORITY_MEDIUM));
  const [itemsLow, setItemsLow] = useState(getTasksByPriority(PRIORITY_LOW));

  return (
    <div className='container'>
      <PriorityBlock
        todos={todos}
        addTask={task => { addTask(task); setItemsHigh(getTasksByPriority(PRIORITY_HIGH)); }}
        priority={PRIORITY_HIGH}
        items={itemsHigh} />
      <PriorityBlock
        todos={todos}
        addTask={task => { addTask(task); setItemsMedium(getTasksByPriority(PRIORITY_MEDIUM)); }}
        priority={PRIORITY_MEDIUM}
        items={itemsMedium} />
      <PriorityBlock
        todos={todos}
        addTask={task => { addTask(task); setItemsLow(getTasksByPriority(PRIORITY_LOW)); }}
        priority={PRIORITY_LOW}
        items={itemsLow} />
    </div>
  )
}

export default App;
