import React from 'react';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import './app.css';
import requestGender from '../../js/requestGender';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleResult = (result) => {
    this.setState({
      result,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    requestGender(value)
      .then((gender) => this.handleResult(gender.gender))
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      value: '',
    });
  };

  render() {
    const { value, result } = this.state;
    return (
      <div className='gender'>
        <h1 className='gender-title'>
          &#128697; know gender by name &#128698;
        </h1>
        <div className='gender-box'>
          <form onSubmit={this.handleSubmit} className='gender-form'>
            <TextInput value={value} onChange={this.handleInput} />
            <Button />
          </form>
          <div className='gender-result'>result:{result}</div>
        </div>
      </div>
    );
  }
}
export default App;
