import React from "react";
import Button from "../button";
import Input from "../input";

export default class Main extends React.Component {
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