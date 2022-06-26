import React, { useState } from "react";
import Todo from "./Todo";
import TodoListFooter from "./TodoListFooter";
import data from "../data.json";

function TodoComp() {
  let todos;
  if (data.length > 0) {
    todos = data.map((item) => {
      return (
        <Todo key={item.id} status={item.status} desc={item.description} />
      );
    });
  } else {
    todos = <div className="no-items">No items yet...</div>;
  }

  return (
    <div className="todo-comp">
      {todos}
      <TodoListFooter />
    </div>
  );
}
export default TodoComp;
