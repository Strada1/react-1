import React from 'react';
import './button.css';

class Button extends React.Component {
    render() {
        const { buttonClassName, valueInput } = this.props;
        return (
            <button type="submit" className={buttonClassName}>
                Узнать пол у "{valueInput}"
            </button>
        );
    }
}

export { Button };
