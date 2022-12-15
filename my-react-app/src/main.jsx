import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";

class Main extends React.Component {
    render() {
        return (
            <form class='form'>
                <TextInput />
                <Button />
            </form>
        )
    }
}

export default Main