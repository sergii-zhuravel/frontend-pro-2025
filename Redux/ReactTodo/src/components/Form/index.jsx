import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export default function Form() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Learn something" />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="secondary" sx={{ p: "10px" }}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
}
