import "./App.css";
import {
  counterReducer,
  CounterContext,
  initCounterState,
} from "./utils/reducer";
import Counter from "./components/Counter/Counter";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initCounterState);
  return (
    <div className="App">
      <h1>Reducer</h1>
      <CounterContext.Provider value={{ state, dispatch }}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
