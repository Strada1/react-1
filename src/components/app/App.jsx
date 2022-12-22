import './app.sass';
import React from 'react';
import FormTask from "../formTask/formTask";
import TaskList from "../taskList/taskList";

function App() {
  return (
    <div className='to-do'>
      <div className='to-do__priority'>
          <FormTask taskPriority = "high" />
          <TaskList taskPriority = "high"/>
      </div>

      <div className='to-do__priority'>
          <FormTask taskPriority = "low" />
          <TaskList taskPriority = "low"/>
      </div>
    </div>
  );
}

export default App;
