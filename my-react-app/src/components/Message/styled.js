import styled from 'styled-components';

export const StyledMessage = styled.h1`
  font-size: 30px;
  color: ${(props) => props.$isFavourite ? "#ffa500" : "#32cd32"};
  text-align: center;
`;
