import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Form } from "../Components/UI/form/form"
<<<<<<< HEAD
import {getGender} from "../Components/getGender"
=======

>>>>>>> a1b9d489d0ea1dafd7a7107b03ce1270b4b8e946

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

function Main () {
  return (
    <div>
      <h1 className='headerGenderize'>Find out gender by name</h1>
<<<<<<< HEAD
      <Form onClick={getGender} divClassName='container' formClassName='formGenderize'> </Form>
=======
      <Form divClassName='container' formClassName='formGenderize'> </Form>
>>>>>>> a1b9d489d0ea1dafd7a7107b03ce1270b4b8e946
    </div>
  )
}

root.render(<Main/>)
