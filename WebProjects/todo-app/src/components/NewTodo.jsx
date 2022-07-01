import React, { useState } from 'react';

function NewTodo({ onSubmit }) {
  const [input, setInput] = useState('');
  const [id, setId] = useState(1);

  // Manejo dele evento subtmit del form donde creamos un objeto newTodo con los
  // datos ingresados
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: id,
      desc: input,
      status: false,
    };
    e.target.reset();
    setId(id + 1);
    onSubmit(newTodo);
  };
  // Actualiza el valor del input cada vez que el usuario escribe algo
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className='new-todo' onSubmit={handleSubmit}>
      <div className='circle'></div>
      <input type='text' placeholder='Drop tables...' onChange={handleChange} />
    </form>
  );
}
export default NewTodo;
