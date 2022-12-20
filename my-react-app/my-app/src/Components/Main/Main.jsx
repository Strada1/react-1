import React, { Component } from "react";
import H1 from "../H1Comp/H1";
import Form from "../FormComp/Form";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <H1 text="Check sex of person" />
        <div className="check">
          <Form action="" type="text" className="form" />
        </div>
      </div>
    );
  }
}
