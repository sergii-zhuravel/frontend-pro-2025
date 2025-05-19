import React from "react";
import Item from "./Item";

const data = ["Apple", "Banana", "Orange"];

export default function List() {
  return (
    <ul>
      {data.map((item) => (
        <Item key={item} label={item} />
      ))}
    </ul>
  );
}
