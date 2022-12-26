import "./Form.css";
import { Input } from "../Input/Input";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import { useState } from "react";

const defaultFormValue = '';

function Form({ priority, addTask}) {
  const [name, setName] = useState(defaultFormValue);

  const handleChange = (e) => {
      setName(e.target.value);
    } 

    const onSubmit = (e) => {
      e.preventDefault();
      if(!name) return;
      const task = {name, priority, isDone: false};
      addTask(task);
      setName(defaultFormValue)
    }

    
  return (
    <form className="to-do-form" onSubmit={onSubmit}>
      <Input handleChange= {handleChange} value={name}/>
      <ButtonAdd />
    </form>
  );
}

export { Form };
