import styled from 'styled-components';

export const StyledLabel = styled.label`
  transition: all 0.3s ease;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  input + span {
    display: inline-flex;
    padding: 12px;
    border: 2px solid #109925;
    border-radius: 50%;
    cursor: pointer;
  }

  input:checked + span {
    border-color: rgb(36, 36, 36, 0.9);
  }

  &:hover {
    opacity: 0.6;
  }

  &:focus + span,
  &:focus-visible + span {
    outline: 2px solid #5e55d6;
    outline-offset: -1px;
  }
`;
