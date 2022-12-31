import { ERROR_MESSAGES } from '../class-components/Error';

const SERVER_URL = 'https://api.genderize.io';

export const getGender = async (name, onSuccess, onError) => {
  try {
    const url = `${SERVER_URL}?name=${name}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(ERROR_MESSAGES.CONNECTION_ERROR);
    }

    const result = await response.json();

    if (!result.gender) {
      throw new Error(ERROR_MESSAGES.NOT_FOUND);
    }

    onSuccess(result);
  } catch (error) {
    onError(error.message);
  }
}
