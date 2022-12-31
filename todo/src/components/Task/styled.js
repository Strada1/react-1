import styled from 'styled-components';
import Button from '../UI/Button';

export const StyledTask = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background-color: ${(props) => (
    props.$isChecked ? "rgba(16, 153, 37, 0.5)" : "rgba(36, 36, 36, 0.9)"
  )};
  border-radius: 16px;
  box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.7);

  p {
    align-self: center;
    margin: 0 auto 0 0;
  }
`;

export const ChangeStatusButton = styled.div`
  margin-top: 5px;
  margin-right: 20px;
`;

export const DeleteButton = styled(Button)`
  margin-top: 5px;
`;
