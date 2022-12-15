import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'

function TextInput (props) {
  return (
	  <input className={props.textInputClassName} type='text'/>
  )
}

export { TextInput }
