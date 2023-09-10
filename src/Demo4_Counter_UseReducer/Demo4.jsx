import DisplayCounter from "./Components/DisplayCounter";
import ChangeCounter from "./Components/ChangeCounter";
import CounterStep from "./Components/CounterStep";
import { useReducer } from "react";
import "./Styles.css";

export const COUNTER_ACTION = Object.freeze({
  INCREMENT: Symbol("Increment"),
  DECREMENT: Symbol("Decrement"),
  INIT: Symbol("Init"),
});

export const STEP_ACTION = Object.freeze({
  SET_VALUE: Symbol("Set Value"),
});

function reducer(state, action) {
  const { counter, step } = state;

  switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
      return { ...state, counter: counter + step };
    case COUNTER_ACTION.DECREMENT:
      return { ...state, counter: counter - step };
    case COUNTER_ACTION.INIT:
      return { ...state, counter: 0 };
    case STEP_ACTION.SET_VALUE:
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

export default function Demo4() {
  const [counterState, dispatch] = useReducer(reducer, { counter: 0, step: 1 });

  return (
    <>
      <DisplayCounter counter={counterState.counter} />
      <CounterStep step={counterState.step} dispatch={dispatch} />
      <ChangeCounter dispatch={dispatch} />
    </>
  );
}
