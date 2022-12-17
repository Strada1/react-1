import React, { useState } from 'react';
import Button from './components/UI/Button';
import Input from './components/UI/Input';
import Message from './components/Message';
import './App.css';

function App() {
  const [textValue, setTextValue] = useState('');
  const [message, setMessage] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setMessage(textValue);
  };

  return (
    <div className="App">
      <form className="some-form" onSubmit={onFormSubmit}>
        <Input
          onChange={(text) => setTextValue(text)}
          type="text"
          value={textValue}
          placeholder="Введите имя"
        />

        <Button type="submit">Нажми меня</Button>
      </form>

      <Message className="app__message" text={message} />
    </div>
  );
}

export default App;
