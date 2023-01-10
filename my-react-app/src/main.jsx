import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
function App() {
  return (
    <div>
      <CreateText className='red' text='Жесть, как это не просто в начале'/>
      <CreateText className='blue' text='как блин сюда теперь класы добавить?'/>
      <CreateText className='green' text='О, работает!'/>
    </div>
  )
}

function CreateText(props) {
  return (
  <div className={props.className}>
    You created: {props.text}
  </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);



root.render(<App/>)

