import React from 'react';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='gender'>
        <h1 className='gender-title'>
          &#128697; know gender by name &#128698;
        </h1>
        <div className='gender-box'>
          <form className='gender-form'>
            <TextInput value={value} onChange={this.handleInput} />
            <Button />
          </form>
        </div>
      </div>
    );
  }
}
export default App;
