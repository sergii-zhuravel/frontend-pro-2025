import React, { useState } from "react";

export default function FormUncontrolled() {
  const [price, setPrice] = useState("$0");
  const handleSubmit = (event) => {
    const { email, password } = event.target;
    console.log("Email: ", email.value);
    console.log("Password: ", password.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const newValue = value.replace(/[^0-9]/g, "");
    setPrice(`$ ${newValue}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <label>
        <span>Price</span>
        <input type="text" name="price" value={price} onChange={handleChange} />
      </label>
      <button>Send</button>
    </form>
  );
}
