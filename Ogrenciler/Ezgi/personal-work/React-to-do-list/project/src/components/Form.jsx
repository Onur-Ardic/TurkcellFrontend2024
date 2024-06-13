import React, { useState } from 'react';
import Request from '../api/API';

const Form = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState('');

  const InputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText === '') {
      alert('Please add a task');
      return;
    } else {
      try {
        const response = await Request.post('http://localhost:3000/todos', {
          text: inputText,  
          completed: false,
          id: Math.random() * 1000
        });

        if (response && response.data) {
          setTodos([...todos, response.data]);
        } else {
          const newTodo = {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
          };
          setTodos([...todos, newTodo]);
        }
      } catch (error) {
        console.error('There was an error creating the todo!', error);
      }
      setInputText('');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='form-input'
        value={inputText}
        type='text'
        placeholder='What are you doing today?'
        onChange={InputTextHandler}
      />
      <button className='form-btn' type='submit'>
        Add
      </button>
    </form>
  );
};

export default Form;
