import React, { useState } from "react";

export default function FormUncontrolled() {
  const handleSubmit = (event) => {
    const { email, password } = event.target;
    console.log("Email: ", email.value);
    console.log("Password: ", password.value);
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
