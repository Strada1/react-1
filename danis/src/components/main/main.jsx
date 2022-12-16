import React from "react";
import Button from "../button";
import Input from "../input";
import SpanResult from "../SpanResult";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      result: "",
    };
  }

  updateName = (value) => {
    this.setState({ name: value });
  };

  updateResult = (gender) => {
    this.setState({result: gender})
  };
  
  render() {
    function breakForm(event) {
      event.preventDefault();
    }

    return (
      <div>
        <form onSubmit={breakForm}>
          <Input updateName={this.updateName} />
          <Button name={this.state.name}  updateResult={this.updateResult}/>
          <SpanResult result={this.state.result} />
        </form>
      </div>
    );
  }
}