import {
  useState,
  useReducer,
  useEffect,
  useLayoutEffect,
  useRef,
  createContext,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";
import "./App.css";
import { Login } from "./Login";
import { User } from "./User";
import { useLocalStorage } from "./useLocalStorage";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count2: state.count2 + 1 };

    default:
      return state;
  }
};

export const AppContext = createContext(null);
function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count2: 0 });
  const [data, setData] = useState("");
  const [username, setUsername] = useState("test");
  const inputRef = useRef(null);
  const [name, setName] = useLocalStorage("name", "");

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const doubleNumberCallback = useCallback(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  console.log(doubleNumber);
  console.log(doubleNumberCallback);

  const onClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
        setData(response.data[0].email);
      });
  }, []);

  useLayoutEffect(() => {
    console.log("Run before useEffect");
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <h1>{state.count2}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Increment the second value
        </button>
      </div>
      <div>{data}</div>
      <div>
        <h1>useRef</h1>
        <input type="text" placeholder="Enter name" ref={inputRef} />
        <button onClick={onClick}>Change name</button>
      </div>
      <div>
        <AppContext.Provider value={{ username, setUsername }}>
          <Login />
          <User />
        </AppContext.Provider>
      </div>
      <div>
        <h1>Custom hook - useLocalStorage</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h1>useMemo</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;
