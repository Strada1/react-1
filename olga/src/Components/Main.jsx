import React from "react";
import Button from "./Button";
import Input from "./Input";
class Main extends React.Component {
  state = {
    value: "",
  };

  callMeHandle = (e) => {
    this.setState({
      value: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <form action="">
          <Input value={this.state.value} inputValue={this.callMeHandle} />
          <Button inputValue={this.state.value} />
        </form>
      </div>
    );
  }
}
export default Main;
