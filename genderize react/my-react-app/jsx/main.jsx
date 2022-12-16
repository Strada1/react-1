import React from 'react';
import ReactDOM from 'react-dom/client';
import InputGenderize from './Input';
import ButtonGenderize from './Button';
import DivName from './Div';
const root = ReactDOM.createRoot(document.getElementById('root'));

class FormGenderize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'текст',
    };
    this.fetchRequest = this.fetchRequest.bind(this);
  }

  handlerName(event) {
    this.setState({
      value: event.target.value,
    });
  }

  fetchRequest(e) {
    e.preventDefault();
    const serverUrl = 'https://api.genderize.io';

    const url = `${serverUrl}?name=${this.state.value}`;
    const promise = fetch(url);
    promise
      .then((result) => result.json())

      .then((result) => {
        console.log(result);
        return result;
      })      
  }
  
  render() {
    return (
      <form onSubmit={this.fetchRequest}>
        <InputGenderize name={(e) => this.handlerName(e)} />
        <ButtonGenderize />
        <DivName  />
      </form>
    );
  }
}
root.render(<FormGenderize />);

