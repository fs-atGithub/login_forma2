import "./Counter.css";
import { useState } from "react";

export function Counter() {
  const counterState = useState(0);
  const counter = counterState[0];
  const setCounter = counterState[1];

  const plus = () => {
    setCounter((state) => ++state);
  };
  const minus = () => {
    setCounter((state) => --state);
  };
  return (
    <div>
      <button className="counter" onClick={minus}>
        {counter}
      </button>
      <span>{counter}</span>
      <button className="counter" onClick={plus}>
        {counter}
      </button>
    </div>
  );
}
