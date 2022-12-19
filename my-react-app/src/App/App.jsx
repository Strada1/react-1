import React from "react";
import "./app.css";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { ShowWarning } from "../warning/warning";
import { serverURL, genderize } from "../request/request";

const minLength = 2;

const defaultState = {
  value: "",
  gender: "",
  isSubmit: true,
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultState.value,
      gender: defaultState.gender,
      isSubmit: defaultState.isSubmit,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length <= minLength) {
      this.setState({ isSubmit: false });
      setTimeout(() => this.setState({ isSubmit: true }), 3000);
      return;
    } else {
      this.setState({ isSubmit: true });
      genderize(`${serverURL}?name=${this.state.value}`).then((result) => {
        this.setState({ gender: result.gender }, () => {
          alert(this.state.gender);
        });
      });
    }
  }

  render() {
    const {value, isSubmit} = this.state
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={value}
            onChange={this.handleChange}
          />
          <Button />
          <ShowWarning warning={isSubmit} />
        </form>
      </div>
    );
  }
}

export { Main };
