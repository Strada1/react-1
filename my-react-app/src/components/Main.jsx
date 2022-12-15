import React, { useState } from "react";
import Form from "./Form";

class Main extends React.Component{
    render(){
        return (
            <div className={this.props.className}>
                <Form className="gender__form" />
            </div>
        )
    }
}

export default Main;