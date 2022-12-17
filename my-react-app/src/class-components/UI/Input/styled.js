import styled from 'styled-components';

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type ?? 'text'
}))`
  width: 100%;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  color: #444444;
  background-color: #ffffff;
  border: 1px solid #444444;
  transition: all 0.3s ease;

  &:hover {
    border-color: #bbbbbb;
  }
`;
