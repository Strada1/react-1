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
    }

    const deleteTask = (task) => {
        const tasksList = tasks.filter((item) => item.task !== task);
        setTasks(tasksList);
    };

    return (
        <div className="container">
            {taskSection.map(({title}) => (
                <PrioritySection
                    addTask={addTask}
                    deleteTask={deleteTask}
                    tasks={tasks}
                    title={title}/>
            ))}

        </div>
    );
}

export default App
