import { Checkbox, Stack } from "@mui/material";
import Item from "../Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, toggleTodo } from "../../store/slices/todosSlice";
import { useEffect } from "react";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(toggleTodo(event.target.id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Stack spacing={1} sx={{ marginTop: "10px" }}>
      {todos.map((todo) => (
        <Item key={todo.id}>
          <Checkbox
            id={todo.id}
            onClick={handleClick}
            checked={todos.completed}
          />{" "}
          {todo.title}
        </Item>
      ))}
    </Stack>
  );
};

export default TodosList;
