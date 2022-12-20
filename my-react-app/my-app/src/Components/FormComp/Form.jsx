import React, { Component } from "react";
import Input from "../InputComp/Input";
import Button from "../ButtonComp/Button";
import { genderize, serverUrl } from "../Request";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      isSubmit: true,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name.length <= 2) {
      alert("It is not a name!");
    } else {
      genderize(`${serverUrl}?name=${this.state.name}`).then((result) => {
        this.setState({ gender: result.gender }, () => {
          alert(this.state.gender);
        });
      });
    }
  }

  render() {
    return (
      <form
        action={this.props.action}
        type={this.props.type}
        className={this.props.className}
        onSubmit={this.handleSubmit}
      >
        <Input
          placeholder="Введите имя"
          className="check_input"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <Button text="Проверить пол" className="check_button" type="submit" />
      </form>
    );
  }
}
