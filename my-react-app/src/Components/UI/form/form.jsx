import React from 'react'
import './form.css'
import { TextInput } from "../input/input"
import { Button } from "../button/button"
import {getGender} from "../../getGender"

function Form (props) {
  return (
	  <div className={props.divClassName}>
		<form onSubmit={getGender} className={props.formClassName}>
			<TextInput textInputClassName="inputNameGenderize"/>
			<Button buttonClassName="buttonSubmitGenderize"/>
		</form>
	  </div>
  )
}

export { Form }
