function TodoListFooter({
  todos_left,
  activeFilter,
  changeFilter,
  clearCompleted,
}) {
  return (
    <div className='todo-comp__footer'>
      {todos_left} tasks left
      <div className='filters'>
        <div
          className={
            activeFilter === 'all'
              ? ' filters__option active'
              : 'filters__option'
          }
          onClick={() => changeFilter('all')}
        >
          All
        </div>
        <div
          className={
            activeFilter === 'active'
              ? ' filters__option active'
              : 'filters__option'
          }
          onClick={() => changeFilter('active')}
        >
          Active
        </div>
        <div
          className={
            activeFilter === 'completed'
              ? ' filters__option active'
              : 'filters__option'
          }
          onClick={() => changeFilter('completed')}
        >
          Completed
        </div>
      </div>
      <div className='clear-btn' onClick={() => clearCompleted()}>
        Clear completed
      </div>
    </div>
  );
}
export default TodoListFooter;
