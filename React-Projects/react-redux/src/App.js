import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    // dispatch({ type: "INC" }); old way
    dispatch(actions.increment());
  };

  const decrement = () => {
    // dispatch({ type: "DEC" }); old way
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(20));
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>add by 10</button>
    </div>
  );
}

export default App;
