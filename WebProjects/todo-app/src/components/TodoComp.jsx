import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";
import TodoListFooter from "./TodoListFooter";

function TodoComp() {
  const [todos, setTodos] = useState([]);
  todos.map((todo) => (
    <Todo key={todo.id} status={todo.status} desc={todo.description} />
  ));
  let no_items = <div className="no-items">No items yet... </div>;
  const addTodo = () => console.log("hi");
  return (
    <>
      <NewTodo action={addTodo} />
      <div className="todo-comp">
        {todos.length > 0 ? todos : no_items}
        <TodoListFooter />
      </div>
    </>
  );
}
export default TodoComp;
