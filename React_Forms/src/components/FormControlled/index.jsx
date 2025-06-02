import React from "react";
import { useFormField } from "../../hooks/use-form-field";

export default function FormControlled() {
  const [email, onEmailChange] = useFormField("");
  const [password, onPasswordChange] = useFormField("");

  const [isValid, setIsValid] = React.useState(false);

  const handleSubmit = (event) => {
    const { email, password } = event.target;
    console.log("Email: ", email.value);
    console.log("Password: ", password.value);
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onPasswordChange}
          />
        </label>
        <button disabled={!isValid}>Send</button>
      </form>
    </div>
  );
}
