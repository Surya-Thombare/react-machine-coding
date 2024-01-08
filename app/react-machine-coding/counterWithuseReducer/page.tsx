"use client";
import * as React from "react";
import Slider from "@/components/slider";

interface State {
  count: number;
  step: number;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "updateStep"; step: number };

function reducer(state: State, action: Action): State {
  if (action.type === "increment") {
    return {
      count: state.count + state.step,
      step: state.step,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - state.step,
      step: state.step,
    };
  } else if (action.type === "reset") {
    return {
      count: 0,
      step: state.step,
    };
  } else if (action.type === "updateStep") {
    return {
      count: state.count,
      step: action.step,
    };
  } else {
    throw new Error("This action type isn't supported.");
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    step: 1,
  });

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleUpdateStep = (step: number) =>
    dispatch({ type: "updateStep", step });

  return (
    <main className="m-auto flex flex-col bg-zinc-900 w-56 h-56 items-center gap-8">
      <h1 className="text-white font-extrabold text-7xl">{state.count}</h1>
      <div className="flex gap-5">
        <button
          onClick={handleDecrement}
          className=" bg-yellow-400 h-8 w-8 text-gray-50 font-bold"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className=" bg-yellow-400 h-8 w-8 text-gray-50 font-bold"
        >
          +
        </button>
        <button
          onClick={handleReset}
          className=" bg-yellow-400 h-8 w-8 text-gray-50 font-bold"
        >
          0
        </button>
      </div>
      <Slider min={1} max={10} onChange={handleUpdateStep} />
    </main>
  );
}
