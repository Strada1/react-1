import styled, { css } from 'styled-components';
import { ACTIONS } from './index';

const additionalStyles = css`
  ${(props) => {
    const action = props?.action;

    switch (action) {
      case ACTIONS.ADD:
        return `
          color: #25db41;
          border: 2px solid #109925;
          border-radius: 0 10px 10px 0;
          background-color: #109925;

          &:hover {
            opacity: 0.8;
          }
          
          &:active {
            opacity: 0.6;
          }

          &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            color: #ffffff;
            text-align: center;
            content: "+";
            transform: translateY(-50%) TranslateX(-50%);
          }
        `;
      case ACTIONS.DELETE:
        return `
          color: #cccccc;
          border: 2px solid #e04226;
          border-radius: 50%;

          &:hover {
            opacity: 0.6;
          }
          
          &:active {
            opacity: 0.4;
          }

          &::before,
          &::after {
            position: absolute;
            height: 12px;
            width: 2px;
            background-color: #e04226;
            border-radius: 4px;
            transform: rotate(45deg);
            content: "";
          }

          &::after {
            transform: rotate(-45deg);
          }
        `;
      default:
        return `
          color: #cccccc;
          border: 2px solid #cccccc;
          border-color: #cccccc;
          border-radius: 50%;
        `;
    }
  }}
`;

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-size: 25px;
  line-height: 1;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  ${additionalStyles}

  &:focus,
  &:focus-visible {
    outline: 2px solid #5e55d6;
    outline-offset: -1px;
  }
`;
