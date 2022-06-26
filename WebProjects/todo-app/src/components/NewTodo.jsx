import React, { useState } from "react";

function NewTodo({ action }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: 1,
      texto: input,
      status: false,
    };
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <div className="circle"></div>
      <input type="text" placeholder="Drop tables..." onChange={handleChange} />
    </form>
  );
}
export default NewTodo;
