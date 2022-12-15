import React from 'react'
import './button.css'


function Button (props) {
  return (
	  <button className={props.buttonClassName}>Submit</button>
  )
}

export { Button }
