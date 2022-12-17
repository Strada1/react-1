import React from "react";
import "./app.css";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { ShowWarning } from "../warning/warning";
import { serverURL, genderize } from "../request/request";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", gender: "", isSubmit: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length <= 2) {
      this.setState({ isSubmit: false });
      setTimeout(() => this.setState({ isSubmit: true }), 3000);
      return;
    } else {
      this.setState({ isSubmit: true });
      genderize(`${serverURL}?name=${this.state.value}`).then((result) => {
        this.setState({ gender: result.gender },
          ()=> {alert(this.state.gender)});
      });
    }
  }

  render() {
    return (
      <div className={this.props.class}>
        <form className="form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button />
          <ShowWarning warning={this.state.isSubmit} />
        </form>
      </div>
    );
  }
}

export { Main };
