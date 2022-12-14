import React, { useState } from "react";
import Form from "./Form";

function Main(props) {
    return (
        <div className={props.className}>
            <Form className="gender__form"/>
        </div>
    );
}

export default Main;