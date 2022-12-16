import React from "react";
import "./button.css";
import { serverUrl } from "../consts/consts";

export default class Button extends React.Component {
  post = () => {
    if (this.props.name.length < 3) {
      this.props.updateResult("Нужно больше символов");
    } else {
      fetch(`${serverUrl}?name=${this.props.name}`)
        .then((respone) => respone.json())
        .then((result) => this.props.updateResult(result.gender));
    }
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.post}>
          Узнай пол
        </button>
        <span></span>
      </div>
    );
  }
}