import React from "react";
import { Result } from "../UI/Result/Result.jsx";
import { Input } from "../UI/Input/Input.jsx";
import { Button } from "../UI/Button/Button.jsx";
import "./App.css";

const serverUrl = "https://api.genderize.io";
const nullString = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: "" };
  }
  getNameGender(value) {
    try {
      const firstName = value;
      if (!firstName) {
        throw new Error("Вы не ввели имя");
      }
      const url = `${serverUrl}?name=${firstName}`;
      fetch(url)
        .then(
          (response) => response.json(),
          (error) => alert(error)
        )
        .then(
          (data) => {
            this.setState({ result: data.gender });
          },
          (error) => alert(error)
        );
    } catch (error) {
      alert(error.message);
    }
  }
  handleSubmit(e) {
    if (this.state.value.length > 2) {
      e.preventDefault();
      console.log("Форма отправлена");
      console.log(this.state);
      this.getNameGender(this.state.value);
    } else {
      console.log("Вы ввели 2 или меньше символов");
      e.preventDefault();
      console.log(this.result);
    }
  }
  handleChange(e) {
    if (e.target.value.length > 2) {
      const value = e.target.value;
      this.setState({ value });
    } else {
      this.setState({ value: "" });
      return;
    }
  }
  handleClick() {
    console.log("click");
  }
  render() {
    return (
      <div className="App">
        <form name="text-form" onSubmit={(e) => this.handleSubmit(e)}>
          <Input
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Your name"
          />
          <Button onClick={this.handleClick} name="button"></Button>
        </form>
        <Result result={this.state.result} />
      </div>
    );
  }
}

export { App };
