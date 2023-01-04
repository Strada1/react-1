import { useState } from 'react'
import AddBlock from './AddBlock';
import ItemList from './ItemList';

function PriorityBlock(props) {
    console.log('render PriorityBlock ' + props.priority);
    
    const todos = props.todos;
    const priority = props.priority;

    const [items, setItems] = useState(getTasks());

    function getTasks() {
        return todos.filter(item => item.priority === priority);
    }

    function addTask(task) {
        if (containsTask(task)) return;
        todos.push(task);
        setItems(getTasks());
    }

    function containsTask(task) {
        return todos.filter(item => item.text === task.text).length > 0;
    }

    function deleteTask(task) {
        console.log("delete task", task)
        const index = findTask(task);
        if (index < 0) return;
        todos.splice(index, 1);
        setItems(getTasks());
    }

    function findTask(task) {
        for (let i = 0; i < todos.length; i++) {
          if (todos[i].text === task.text) return i;
        }
      
        return -1;
      }

    return (
        <div className='block'>
            <div className='title'>
                <h3>{priority}</h3>
            </div>
            <AddBlock
                priority={priority}
                addTask={addTask} />
            <ItemList deleteTask={deleteTask} items={items} />
        </div>
    );
}

export default PriorityBlock;