import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        console.log('Form submited');
        e.preventDefault();
    }

    render() {
        return (
            <input
                type="submit"
                value="Genderize"
                className="submit"
            />
        )
    }
}

export default Button