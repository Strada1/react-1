import { React } from 'react'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'

const UiForm = () => {
  function handleSubmit(event) {
    event.preventDefault()
    console.log('form work')
  }
  function handleInput (event) {
    event.preventDefault()
    console.log(event.target.value)
  }
  function handleButton () {
    console.log('im here')
  }
  return (
    <form className='request' onSubmit={handleSubmit}>
      <MyInput 
        className='input-request'
        type='text'
        placeholder=' First Name' 
        autoFocus
        onChange={handleInput}
      />
      <MyButton 
        className='button-request'
        type='submit' 
        onClick={handleButton}
      >
        Request
      </MyButton>
    </form>
  )
}

export { UiForm }
