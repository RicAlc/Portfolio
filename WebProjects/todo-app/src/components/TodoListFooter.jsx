function TodoListFooter({ todos_left, activeFilter, changeFilter }) {
  return (
    <div className='todo-comp__footer'>
      {todos_left} tasks left
      <div className='filters'>
        <div
          className={`filters__option ${
            activeFilter == 'all' ? 'active' : null
          }`}
          onClick={() => changeFilter('all')}
        >
          All
        </div>
        <div
          className={`filters__option ${
            activeFilter == 'active' ? 'active' : null
          }`}
          onClick={() => changeFilter('active')}
        >
          Active
        </div>
        <div
          className={`filters__option ${
            activeFilter == 'completed' ? 'active' : null
          }`}
          onClick={() => changeFilter('completed')}
        >
          Completed
        </div>
      </div>
      <div className='clear-btn'>Clear completed</div>
    </div>
  );
}
export default TodoListFooter;
