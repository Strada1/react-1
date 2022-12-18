import React from "react";

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <span className="result-span">{this.props.result}</span>
      </div>
    );
  }
}

export { Result };
