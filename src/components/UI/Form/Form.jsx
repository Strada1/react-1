import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input.jsx";

class Form extends React.Component {
  submitHandler(e, text) {
    e.preventDefault();
    console.log(text);
  }
  render() {
    return (
      <form
        onSubmit={(e) => this.submitHandler(Input.state.value, e)}
        className="text-form"
      >
        <Input />
        <Button textInButton="Нажми"></Button>
      </form>
    );
  }
}

export { Form };
