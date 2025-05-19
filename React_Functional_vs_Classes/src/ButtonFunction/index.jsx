import { useEffect } from "react";
import { useState } from "react";

function ButtonFunction(props) {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Component Did Mount");

    return () => {
      console.log("Component Will Be Unmounted");
    };
  }, []);

  useEffect(() => {
    if (counter === 0) return;
    console.log("Component Did Update");
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button onClick={handleClick}>
      {props.title}: {counter}
      {todos}
    </button>
  );
}

export default ButtonFunction;
