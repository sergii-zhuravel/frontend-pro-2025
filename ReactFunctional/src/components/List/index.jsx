import Item from "./Item";

const List = ({ todos, onDelete, onDoneToggle }) => {
  return (
    <ul className="listwrapper">
      {todos.map((todo) => (
        <Item todo={todo} onDelete={onDelete} onDoneToggle={onDoneToggle} />
      ))}
    </ul>
  );
};

export default List;
