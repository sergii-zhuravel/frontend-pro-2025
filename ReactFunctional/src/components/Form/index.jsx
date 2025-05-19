import React, { useState } from "react";

function Form({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);

    setTitle("");
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleInputChange} />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}

export default Form;
