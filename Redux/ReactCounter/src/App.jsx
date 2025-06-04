import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import { store } from "./store/store";
import { decrement, increment } from "./store/slices/counterSlice";

const Main = () => {
  const value = useSelector((state) => state.value);
  // const store = useStore();
  // const state = store.getState();

  const dispatch = useDispatch();
  // console.log(state);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
