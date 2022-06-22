function TodoListFooter() {
  return (
    <div className="todo-comp__footer">
      5 items left
      <div className="filters">
        <div className="filters__option active">All</div>
        <div className="filters__option">Active</div>
        <div className="filters__option">Completed</div>
      </div>
      <div className="clear">Clear Completed</div>
    </div>
  );
}
export default TodoListFooter;
