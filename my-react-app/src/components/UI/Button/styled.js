import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 12px 45px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  color: #ffffff;
  background-color: #302683;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #3f3ccb;
  }

  &:active {
    color: #ffffff;
    background-color: #2e2c9c;
  }
`;
