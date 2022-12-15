import React from "react";
import { Result } from "../UI/Result/Result.jsx";
import { Form } from "../UI/Form/Form.jsx";
import "./App.css";
import { Input } from "../UI/Input/Input.jsx";
import { Button } from "../UI/Button/Button.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Input />
        <Button textInButton="Нажми" /> */}
        <Form></Form>
        <Result />
      </div>
    );
  }
}

export { App };
