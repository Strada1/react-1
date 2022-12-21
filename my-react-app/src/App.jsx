import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

class App extends React.Component {
    render() {
        return (
            <form className="form">
                <TextInput />
                <Button />
            </form>
        )
    }
}

export default App