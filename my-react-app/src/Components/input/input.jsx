import React from 'react';
import './input.css';

class TextInput extends React.Component {
    render() {
        return (
            <input
                value={this.props.valueInput}
                onChange={this.props.onChange}
                className={this.props.textInputClassName}
                type="text"
                placeholder="Введите Имя"
            />
        );
    }
}

export { TextInput };
