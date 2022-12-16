import React from 'react';
import { ResultContainer, ResultField } from './styled';

class GenderizeResult extends React.Component {
  render() {
    return (
      <ResultContainer className={this.props.className}>
        Result:{" "}
        <ResultField>{this.props.children}</ResultField>
      </ResultContainer>
    );
  }
}

export default GenderizeResult;
