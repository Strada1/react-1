import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { TaskTable } from './TaskTable/TaskTable';

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <TaskTable tasks={this.props.tasks} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

export  { App };