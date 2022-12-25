import React from "react";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import { API, COMPONENTS_STYLE, COMPONENTS_TYPE } from "./constants";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null, gender: null, inputValid: true };
  }
  async submitHandler(name) {
    try {
      const response = await fetch(API.ENDPOINTS.genderize_name + name);
      const data = await response.json();
      this.setState({ gender: data.gender });
    } catch (err) {
      console.log(err);
    }
  }
  inputHandler(name) {
    if (name.length < 3) {
      this.setState({ inputValid: false });
    } else {
      this.setState({ inputValid: true });
    }
    this.setState({ name: name });
  }
  render() {
    return (
      <div className={this.props.className}>
        <Form
          className={COMPONENTS_STYLE.GENERAL.flexed}
          onSubmit={(e) => {
            e.preventDefault();
            this.submitHandler(this.state.name);
          }}
        >
          <Input
            className={
              this.state.inputValid
                ? COMPONENTS_STYLE.INPUT.input
                : COMPONENTS_STYLE.INPUT.input_red
            }
            type={COMPONENTS_TYPE.INPUT.text}
            onChange={(e) => {
              this.inputHandler(e.target.value);
            }}
          />
          <Button
            type={COMPONENTS_TYPE.BUTTON.submit}
            className={COMPONENTS_STYLE.BUTTON.button}
          >
            Genderize
          </Button>
        </Form>
        <div>Result:</div>
        <div>{this.state.gender}</div>
      </div>
    );
  }
}

export default MainComponent;
