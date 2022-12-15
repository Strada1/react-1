import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Input from "./components/Input";

class Main extends React.Component {
  render() {

    function breakForm(event) {
      event.preventDefault();
    }

    return (
      <div>
        <form onSubmit={breakForm}>
          <Input />
          <Button />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
