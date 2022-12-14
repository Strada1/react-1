import React from 'react';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Result from "../Result/Result";
import "./styleMain.css";

class Main extends React.Component {
  render() {
    return (
      <div className='block-main_wrapper'>
        <div className="block-main">
          <TextInput></TextInput>
          <Button></Button>
          <Result></Result>
        </div>
      </div>
    )
  }
}

export default Main