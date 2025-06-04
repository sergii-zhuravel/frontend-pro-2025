import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counterSlice";

function App() {
  const value = useSelector((state) => state.value);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      Value: {value}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
