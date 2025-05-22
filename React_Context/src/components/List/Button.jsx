import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Button({ title }) {
  const theme = useContext(ThemeContext);

  const style =
    theme === "light"
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "black", color: "white" };

  return <button style={style}>{title.toUpperCase()}</button>;
}
