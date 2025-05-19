import React, { useContext } from "react";
import Item from "./Item";
import ThemeContext from "../../context/ThemeContext";

const data = ["Apple", "Banana", "Orange"];

export default function List() {
  const theme = useContext(ThemeContext);

  console.log(theme);
  return (
    <ul>
      {data.map((item) => (
        <Item key={item} label={item} />
      ))}
    </ul>
  );
}
