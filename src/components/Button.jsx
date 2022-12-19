import React from 'react';
import { MainContainer } from './MainContainer.jsx';

export class Button extends React.Component {
  render() {
      return (
      <button onClick={this.props.onClick} className={this.props.className} id={this.props.id} >
       CHECK</button>
    );
  }
}