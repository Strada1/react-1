import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))

function Button (props){
  return <button className='button'>нажми меня, {props.name}</button>
}

const element = <Button name='Серый'/>

root.render(element)

function Sexy (props){
  return <p>Первые словечки в реакте от {props.lastname}</p>
}

const ahaha = <Sexy lastname='псины' />

root.render(ahaha)