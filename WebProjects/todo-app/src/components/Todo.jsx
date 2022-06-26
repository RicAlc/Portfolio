import CheckIco from "../assets/icons/Check";
import CrossIco from "../assets/icons/CrossIco";

const Todo = ({ id, desc, status, complete, deleteTodo }) => (
  <div className={`todo ${status == "completed" ? "completed" : null}`}>
    <div className="todo__checkbox" onClick={() => complete(id)}>
      {status == "completed" ? <CheckIco /> : null}
    </div>
    <div className="todo__desc">{desc}</div>
    <div onClick={() => deleteTodo(id)}>
      {status == "completed" ? <CrossIco /> : null}
    </div>
  </div>
);
export default Todo;
