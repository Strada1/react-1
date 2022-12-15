import React, { Component } from "react";
import H1 from "../H1Comp/H1";
import Input from "../InputComp/Input";
import Button from "../ButtonComp/Button";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <H1 text="Check sex of person" />
        <div className="check">
          <form action="" type="submit" className="check_form">
            <Input placeholder="Введите имя" className="check_input" />
            <Button text="Проверить пол" className="check_button" />
          </form>
        </div>
      </div>
    );
  }
}
