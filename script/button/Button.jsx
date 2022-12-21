import React from "react";

class Button extends React.Component{
    constructor(props) {
         super(props);

         this.click = this.click.bind(this);
    }

    click(event) {
        event.preventDefault();
        console.log('button is working');
    }

    render() {
        return (
            <button type="submit" >Search</button>
        )
    }
}

export default Button;