import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, onSubmit, children } = this.props;
    return (
      <div>
        <form className={className} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    );
  }
}

export default Form;
