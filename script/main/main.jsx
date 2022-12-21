import React from "react";
import ReactDOM from 'react-dom/client';

import TextInput from "../textInput/textInput";
import Button from "../button/Button";
import request from "../fetch/fetch";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                    gender: '',
                    name: ''
                     };
    }

    handlerName(event) {
        this.setState({name: event.target.value})
    }

    handlerGender(gender) {
        if (this.state.gender !== gender) { 
            this.setState({gender:gender})
        }
    }

    render() {
        const promise = request(this.state.name);
        promise.then(result => this.handlerGender(result.gender));
        console.log(this.state.gender)
        return (
            <div className="main">
                <h1>Genderize</h1>
                <form onSubmit={(event) => {
                    event.preventDefault(); 
                    request(this.state.name);
                    }}>
                    <TextInput name={(event) => {this.handlerName(event)}} value={this.state.name}/>
                    <br/>
                    <Button/>
                </form>
                <div className="gender">{this.state.gender}</div>
            </div>
        )
    }

}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<Form/>);
