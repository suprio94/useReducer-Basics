import "./styles.css";
import { useReducer } from "react";
export default function App() {
  /* using state and action object. This is useful for global
state update. */

  const initialState = {
    firstInitialState: 0,
    secondInitialState: 10
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          firstInitialState: state.firstInitialState + action.value
        };
      case "decrement":
        return {
          ...state,
          firstInitialState: state.firstInitialState - action.value
        };
      case "increment2":
        return {
          ...state,
          secondInitialState: state.secondInitialState + action.value
        };
      case "decrement2":
        return {
          ...state,
          secondInitialState: state.secondInitialState - action.value
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Count is {count.firstInitialState}</h3>
      <h3>Second Count is {count.secondInitialState}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
