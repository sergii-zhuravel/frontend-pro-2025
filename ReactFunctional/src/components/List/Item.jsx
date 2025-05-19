import Button from "./Button";

function Item({ todo, onDelete, onDoneToggle }) {
  return (
    <li className="d-flex justify-content-between mb-2 mt-2 listItem">
      <span>
        {todo.title}: {todo.done ? "Done" : "In progress"}
      </span>
      <div>
        <Button
          className="btn btn-success mr-2"
          title="Done"
          onClick={onDoneToggle}
          id={todo.id}
        />
        <Button
          className="btn btn-danger"
          title="Delete"
          onClick={onDelete}
          id={todo.id}
        />
      </div>
    </li>
  );
}

export default Item;
