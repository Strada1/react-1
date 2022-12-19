import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import Result from '../Result/Result'
import './styleMainForm.css'
import fetchRequest from '../../functions/fetchRequest'

class MainForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      gender: 'unknown',
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSendRequest = this.handleSendRequest.bind(this)
  }

  handleChangeInput(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  handleSendRequest(event) {
    event.preventDefault()
    const { inputValue } = this.state
    fetchRequest(inputValue, 'https://api.genderize.io').then((result) => {
      this.setState({
        gender: result.gender,
      })
    })
  }

  render() {
    const { inputValue } = this.state
    const { gender } = this.state
    return (
      <div className="block-main_wrapper">
        <form className="form-main" onSubmit={this.handleSendRequest}>
          <TextInput textchange={this.handleChangeInput} />
          {inputValue.length <= 2 && (
            <div className="text-result">Please enter more letters</div>
          )}
          <Button inputValue={inputValue} />
          {gender !== 'unknown' ? (
            <Result resultTextContent={gender} />
          ) : (
            <div className="text-result">
              Enter a name to get the suggested gender
            </div>
          )}
          {gender === null && (
            <div className="text-result">Please enter another name</div>
          )}
        </form>
      </div>
    )
  }
}

export default MainForm
