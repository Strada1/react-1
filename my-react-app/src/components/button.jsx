import React from "react";

export class Button extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        console.log(document.querySelector('.input').value);
    }

    render() {
        return(
            <button className={this.props.className} type='submit' onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}

