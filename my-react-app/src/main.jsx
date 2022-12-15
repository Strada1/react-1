import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <div>
        <Button text = 'hello' />
        <Button text = 'ello' />
        <Button text = 'loo' />
      </div>
    )
  }
}

const element = <App />;

root.render(element);