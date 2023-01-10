import { createContext } from 'react';

const defaultValue = {
  mail: 'name@example.com',
  text: 'some text',
};

const nowContext = createContext(defaultValue);

export default nowContext;
