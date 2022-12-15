import React, { useState } from "react";

class Button extends React.Component{
    render(){
        return(
            <button className={this.props.className} id={this.props.id} type={this.props.type}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;