import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";
import TodoListFooter from "./TodoListFooter";

function TodoComp() {
  const [todos, setTodos] = useState([]);

  // let no_items = <div className="no-items">No items yet... </div>;

  //Function to add todo added as prop for todo component to use it
  const addTodo = (newTodo) => {
    //Check if input is not empty string
    if (newTodo.desc.trim()) {
      const updatedTodos = [newTodo, ...todos];
      setTodos(updatedTodos);
      console.log(updatedTodos);
    } else {
      window.alert("Por favor ingresa una tarea para añadirla");
    }
  };
  //Filter todos with id and create new array without deleted id
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  //Complete function change todo status to !status
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    console.log("Clearing completed");
  };
  return (
    <>
      <NewTodo onSubmit={addTodo} />
      <div className="todo-comp">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            status={todo.status}
            desc={todo.desc}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoListFooter todosLeft={8} clearCompleted={clearCompleted} />
      </div>
    </>
  );
}
export default TodoComp;
