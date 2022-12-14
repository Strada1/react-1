import OutputResult from '../components/OutputResult'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import '../../styles/styles.css'

function App() {

  return (
    <div className='wrapper'>
      <h3>How do you get to know the gender of a person using his first name?</h3>
      <form className='request'>
        <MyInput className='input-request' type="text" placeholder=" First Name" autoFocus/>
        <MyButton className='button-request'>Request</MyButton>
      </form>
      <OutputResult />
    </div>
  )
}

export default App
