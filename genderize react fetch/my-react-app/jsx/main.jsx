import React from 'react';
import ReactDOM from 'react-dom/client';
import InputGenderize from './Input';
import ButtonGenderize from './Button';
import DivName from './Div';
import DivError from './DivError';
const root = ReactDOM.createRoot(document.getElementById('root'));

class FormGenderize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      name: '',
      gender: '',
    };

    this.fetchRequest = this.fetchRequest.bind(this);
  }

  handlerName(event) {
    this.setState({
      value: event.target.value,
    });
    let namelength = this.state.value;
  }

  handlerGender(name, gender) {
    this.setState({
      name: name,
      gender: gender,
    });
    console.log(this.state.value.length);
  }

  fetchRequest(e) {
    e.preventDefault();
    console.log(e.target.value);
    const serverUrl = 'https://api.genderize.io';

    const url = `${serverUrl}?name=${this.state.value}`;
    const promise = fetch(url);
    promise
      .then((result) => result.json())

      .then((result) => {
        this.handlerGender(result.name, result.gender);
        return result;
      });
    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.fetchRequest}>
        <InputGenderize
          value={this.state.value}
          name={(e) => this.handlerName(e)}
        />
        <ButtonGenderize />
        <DivName name={this.state.name} genderize={this.state.gender} />
      </form>
    );
  }
}
root.render(<FormGenderize />);
