import React from "react"

class Button extends React.Component {
  render() {
    return (
      <button >
        <p>{this.props.text}</p>
      </button>
    )
  }
}

export default Button
