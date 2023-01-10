import styled from 'styled-components';

export const StyledError = styled.h3`
  margin: 0;
  padding: ${(props) => (
    props.$isError
    ? "20px 0 40px 0"
    : "0"
  )};
  font-size: 26px;
  color: #5e55d6;
  text-align: center;
  opacity: ${(props) => (
    props.$isError
    ? "1"
    : "0"
  )};
  transition:
    padding 0.5s ease,
    opacity 1s ease;
`;
