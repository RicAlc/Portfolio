import CheckIco from "../assets/icons/Check";
import CrossIco from "../assets/icons/CrossIco";

const Todo = (props) => (
  <div className={`todo ${props.status == "completed" ? "completed" : null}`}>
    <div className="todo__checkbox">
      {props.status == "completed" ? <CheckIco /> : null}
    </div>
    <div className="todo__desc">Ir a la tienda por tortillas</div>
    {props.status == "completed" ? <CrossIco /> : null}
  </div>
);
export default Todo;
