import React from "react";
import styles from "./toggle-button.module.css";

export default function ToggleButton({ theme, onClick }) {
  return (
    <button className={styles.big + " " + "red"} onClick={onClick}>
      {theme.toUpperCase()}
    </button>
  );
}
