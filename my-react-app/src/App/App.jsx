import React from "react";
import "./app.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

class Form extends React.Component {
  
  render() {
    return (
      <form className="form">
      <Input type="text" name="name" placeholder="Your name" />
      <Button />
    </form>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <Form />
      </div>
    );
  }
}


export { Main };
