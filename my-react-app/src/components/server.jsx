export const SERVER_URL = 'https://api.genderize.io';

class ServerError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
}

export async function addGender(url) {
    try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new ServerError('data fetch error');
        }
  
        const result = await response.json();
        return result;
      } catch (err) {
        if (err instanceof ServerError) {
          console.log(err.message);
        } else {
          throw err;
        }
      }
}