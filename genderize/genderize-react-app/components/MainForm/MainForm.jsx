import React from "react";
import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
import './MainForm.css'

class MainForm extends React.Component {
    request(e) {
        e.preventDefault();
        const value = document.querySelector(".input-name").value;
        console.log("request sent " + value)
    }
    render() {
        return (
            <div>
                <form className="main-form" onSubmit={this.request}>
                    <TextInput />
                    <Button/>
                </form>
            </div>
        );
    }

}

export default MainForm;