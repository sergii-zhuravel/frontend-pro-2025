import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => {
  console.log(theme);
  return {
    textAlign: "left",
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  };
});

export default Item;
