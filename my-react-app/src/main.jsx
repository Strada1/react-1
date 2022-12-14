import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

function App() {
  return(
    <div>
      <h1 className='headerGenderize'>Find out gender by name</h1>
      <Main divClassName='container' formClassName='formGenderize' />
    </div>
  )
}

function Main(props) {
  return (
    <div className={props.divClassName}>
      <form className={props.formClassName}>
          <TextInput textInputClassName="inputNameGenderize"/>
          <Button buttonClassName="buttonSubmitGenderize"/>
      </form>
    </div>
  )
}

function Button(props) {
  return(
    <button className={props.buttonClassName}>Submit</button>
  )
}

function TextInput(props) {
  return(
    <input className={props.textInputClassName} type='text'/>
  )
}


root.render(<App/>)