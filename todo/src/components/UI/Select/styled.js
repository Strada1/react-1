import styled from 'styled-components';
import SelectArrow from '../../../assets/img/icons/select-arrow.svg';

export const StyledSelect = styled.select`
  width: 100%;
  padding: 5px 30px 5px 10px;
  font: inherit;
  font-size: 18px;
  line-height: 30px;
  color: inherit;
  background-color: rgb(36, 36, 36, 0.9);
  background-image: url(${SelectArrow});
  background-repeat: no-repeat;
  background-position: right 11px center;
  border: 2px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222222;
  }

  &:focus,
  &:focus-visible {
    outline: 2px solid #5e55d6;
    outline-offset: -1px;
  }
`;
