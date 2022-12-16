import React from 'react';

export class TextInput extends React.Component {
  render() {
    return (
      <input
        placeholder="write name"
        type="text"
        className={this.props.InputClass}
        onChange={(e) => this.props.inputHandl(e.target.value)}
      ></input>
    );
  }
}
