import { useState } from "react";
import DisplayCounter from "./Components/DisplayCounter";
import ChangeCounter from "./Components/ChangeCounter";
import CounterStep from "./Components/CounterStep";
import "./Styles.css";

export default function Demo3() {
  const [counterState, setCounterState] = useState({ counter: 0, step: 1 });

  const incrementCounter = () =>
    setCounterState({
      ...counterState,
      counter: counterState.counter + counterState.step,
    });

  const decrementCounter = () =>
    setCounterState({
      ...counterState,
      counter: counterState.counter - counterState.step,
    });

  const initCounter = () => setCounterState({ ...counterState, counter: 0 });

  const changeStep = (val) => setCounterState({ ...counterState, step: val });

  return (
    <>
      <DisplayCounter counter={counterState.counter} />
      <CounterStep step={counterState.step} handleStepChange={changeStep} />
      <ChangeCounter
        handleIncrement={incrementCounter}
        handleDecrement={decrementCounter}
        handleInit={initCounter}
      />
    </>
  );
}
