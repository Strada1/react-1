import React from "react";
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button className="send-request">Send Request</button>
            </div>
        );
    }
}

export default Button;