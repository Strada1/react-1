import "./Form.css";
import { Input } from "../Input/Input";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import { useState } from "react";

function Form({ priority, setTasks, tasks}) {
  const [name, setName] = useState('');

  const handleChange = (e) => {
      setName(e.target.value);
    } 

    const addTask = (name, priority) => {
      if(!name) return;
      setTasks([{name: name, priority: priority, isDone: false}, ...tasks]);
      setName('')
    }
    
  return (
    <form className="to-do-form" onSubmit={(e)=> {
      e.preventDefault();
      addTask(name, priority);
    }}>
      <Input handleChange= {handleChange} value={name}/>
      <ButtonAdd />
    </form>
  );
}

export { Form };
