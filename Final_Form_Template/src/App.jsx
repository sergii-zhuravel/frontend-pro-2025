import { Form } from "react-final-form";
import LoginForm from "./components/LoginForm/LoginForm";

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Email required'
//   }
//   if (!values.password) {
//     errors.password = 'Required'
//   }
//   return errors;
// }

function App() {
  const handleSubmit = (values) => {
    console.log("Values:", values);
  };

  return (
    <Form
      initialValues={{
        email: "1",
        password: "2",
      }}
      // validate={validate}
      onSubmit={handleSubmit}
      render={LoginForm}
    />
  );
}

export default App;
