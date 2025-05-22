import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <Chip label={`Count: ${3}`} />
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
