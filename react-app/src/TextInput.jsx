import React from 'react';

export class TextInput extends React.Component {
  render() {
    return <input type="text" className={this.props.InputClass}></input>;
  }
}
