import CheckIco from '../assets/icons/Check';
import CrossIco from '../assets/icons/CrossIco';

function Todo({ id, desc, status, deleteTodo, completeTodo }) {
  return (
    <div id={id} className={`todo ${status ? 'completed' : ''}`}>
      <div className='todo__checkbox' onClick={() => completeTodo(id)}>
        {status ? <CheckIco /> : null}
      </div>
      <div className='todo__desc'>{desc}</div>
      <div onClick={() => deleteTodo(id)}>
        <CrossIco />
      </div>
    </div>
  );
}
export default Todo;
