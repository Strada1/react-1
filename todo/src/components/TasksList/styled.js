import styled from 'styled-components';
import Task from '../Task';

export const StyledTasksList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const StyledTask = styled(Task)`
  margin-bottom: 8px;
`;
