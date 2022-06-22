import Todo from "./Todo";
import TodoListFooter from "./TodoListFooter";

function TodoComp() {
  return (
    <div className="todo-comp">
      <Todo status="completed" />
      <Todo />
      <Todo />
      <Todo status="completed" />
      <Todo />
      <Todo />
      <TodoListFooter />
    </div>
  );
}
export default TodoComp;
