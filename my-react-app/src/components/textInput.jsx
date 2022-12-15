import React from "react";

export class TextInput extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        console.log(document.querySelector(this.props.className).value);
    }

    render() {
        return(
            <input className={this.props.className} type="text" onInput={this.handleClick.bind(this)}></input>
        )
    }
}

