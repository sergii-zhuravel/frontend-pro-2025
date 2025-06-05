import { Checkbox, Stack } from "@mui/material";
import Item from "../Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, updateTodo } from "../../store/slices/todosSlice";
import { useEffect } from "react";

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleTodoUpdate = (event) => {
    dispatch(updateTodo({ id: event.target.id }));
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  return (
    <Stack spacing={1} sx={{ marginTop: "10px" }}>
      {todos.map((todo) => (
        <Item>
          <Checkbox
            onClick={handleTodoUpdate}
            id={todo.id}
            defaultChecked={todo.completed}
          />{" "}
          {todo.title}
        </Item>
      ))}
    </Stack>
  );
};

export default TodosList;
