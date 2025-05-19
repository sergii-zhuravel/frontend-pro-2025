import React from "react";

export default function Button({ title }) {
  return (
    <button style={{ backgroundColor: "black", color: "white" }}>
      {title.toUpperCase()}
    </button>
  );
}
