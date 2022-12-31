import styled from 'styled-components';
import TodoForm from '../TodoForm';

export const TodoAppContainer = styled.div`
  width: 640px;
  min-width: 280px;
  margin: 0 auto;
`;

export const TodoTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 40px;
`;

export const StyledTodoForm = styled(TodoForm)`
  margin-bottom: 50px;
`;
