import React from 'react'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'

const UiForm = () => {
  return (
    <form className='request'>
      <MyInput className='input-request' type='text' placeholder=' First Name' autoFocus/>
      <MyButton className='button-request'>Request</MyButton>
    </form>
  )
}

export { UiForm }
