import './App.css'
import {taskSection} from "../helper/const.js";
import PrioritySection from "../components/PrioritySection/PrioritySection.jsx";
import {useState} from "react";


function App() {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        if (!task) {
            return;
        }
        setTasks([...tasks, task]);
        console.log(tasks)
    }
    const deleteTask = (task) => {
        console.log(tasks)
        const tasksList = tasks.filter((item) => item !== task);
        setTasks(tasksList);
    };

    return (
        <div className="container">
            {taskSection.map(({title, priority,placeholder}) => (
                <PrioritySection
                    key={Date.now() * Math.random() * 3}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    title={title}
                    priority={priority}
                    placeholder={placeholder}
                    tasks={tasks}
                />
            ))}

        </div>
    );
}

export default App
