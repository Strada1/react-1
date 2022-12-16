import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.genderize = this.genderize.bind(this);
  }
  genderize() {
    const nameFromInput = this.props.responseInput;
    if (nameFromInput.length < 2) {
      this.props.setResult('enter more than two characters');
    } else {
      const url = `https://api.genderize.io?name=${nameFromInput}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.props.setResult(data.gender ? data.gender : 'Unknown');
        });
    }
  }

  render() {
    return (
      <button className={this.props.btnClass} onClick={this.genderize}>
        find out gender
      </button>
    );
  }
}
