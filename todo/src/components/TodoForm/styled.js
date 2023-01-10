import styled from 'styled-components';
import Button from '../UI/Button';
import Select from '../UI/Select';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(2, auto);
  row-gap: 20px;
  column-gap: 0;
  padding: 30px;
  background-color: rgb(36, 36, 36, 0.9);
  border-radius: 16px;
  box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.7);
`;

export const InputContainer = styled.legend`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  justify-content: stretch;
  padding: 0;
`;

export const SelectContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const PrioritySelect = styled(Select)`
  width: 240px;
  min-width: 240px;
`;

export const ButtonContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const StyledAddButton = styled(Button)`
  width: 100%;
  height: 100%;
`;
