import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: #444444;
  background-color: #ffffff;
  border: none;
  border-radius: 10px 0 0 10px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:focus,
  &:focus-visible {
    outline: 2px solid #5e55d6;
    outline-offset: -1px;
  }
`;
