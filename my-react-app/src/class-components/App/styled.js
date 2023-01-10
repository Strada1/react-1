import styled from 'styled-components';
import GenderizeForm from '../GenderizeForm';
import GenderizeResult from '../GenderizeResult';

export const StyledContainer = styled.div`
  width: 660px;
  margin: 40px auto;
  padding: 20px;
  border: 2px solid #73638a;
`;

export const GenderizeTitle = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledForm = styled(GenderizeForm)`
  width: 100%;
  margin-bottom: 40px;
`;

export const StyledResult = styled(GenderizeResult)`
  margin-top: 0;
  margin-bottom: 20px;
`;
