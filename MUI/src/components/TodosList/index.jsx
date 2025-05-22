import { Checkbox, Stack } from "@mui/material";
import Item from "../Item";

const TodosList = () => (
  <Stack spacing={1} sx={{ marginTop: "10px" }}>
    <Item>
      <Checkbox defaultChecked /> Mui
    </Item>
    <Item>
      <Checkbox /> JSS
    </Item>
    <Item>
      <Checkbox /> CSS
    </Item>
  </Stack>
);

export default TodosList;
