import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'


function App() {
  return (
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
        <TextInput textInputClassName="inputNameGenderize" />
        <Button buttonClassName="buttonSubmitGenderize" />
      </form>
    </div>
  )
}


function TextInput(props) {
  return (
    <input className={props.textInputClassName} type='text' />
  )
}


function Button(props) {
  return (
    <button className={props.buttonClassName}>Click me</button>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
