import { createContext } from "react";

export const initCounterState = {
  value: 0,
};

export const CounterContext = createContext({});

export const counterReducer = (state, action) => {
  if (action.type === "inc") {
    return {
      value: state.value + 1,
    };
  } else if (action.type === "dec") {
    return {
      value: state.value - 1,
    };
  } else if (action.type === "reset") {
    return {
      value: 0,
    };
  } else {
    return { value: value };
  }
};
