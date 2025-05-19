import React from "react";
import Button from "./Button";

export default function Item({ label }) {
  return (
    <li>
      {label} <Button title={label} />
    </li>
  );
}
