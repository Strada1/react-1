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
      gender: '',
    };

    this.fetchRequest = this.fetchRequest.bind(this);
  }

  handlerName(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handlerGender(gender) {
    this.setState({
      gender: gender,
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
        this.handlerGender(result.gender);
        return result;
      });
  }

  render() {
    const divResult = this.state.value.length;
    let div;
    if (divResult <= 2) {
      div = <DivError />;
    } else {
      div = <DivName genderize={this.state.gender} />;
    }

    return (
      <form onSubmit={this.fetchRequest}>
        <InputGenderize
          value={this.state.value}
          name={(e) => this.handlerName(e)}
        />
        <ButtonGenderize />
        {div}
      </form>
    );
  }
}

root.render(<FormGenderize />);
