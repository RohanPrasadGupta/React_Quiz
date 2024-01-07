import { useReducer } from "react";

function reducer(state, action) {
  console.log(action.type);

  // console.log(state, action);
  // if (action.type === "dec") return state + action.payLoad;
  // if (action.type === "inc") return state + action.payLoad;
  // if (action.type === "setCount") return action.payLoad;
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };

    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payLoad };

    case "setStep":
      return { ...state, step: action.payLoad };

    case "reset":
      return { ...state, count: 0, step: 1 };

    default:
      throw new Error("Unknown action");
  }
}

export default function DateCounter() {
  // const [count, setCount] = useState(0);

  // const [step, setStep] = useState(1);
  const initailState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initailState);
  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // console.log(date);

  const dec = function () {
    dispatch({ type: "dec", payLoad: -1 });
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payLoad: +1 });
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payLoad: Number(e.target.value) });
    // setCount(Number(e.target.value));
    // console.log(count);
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payLoad: Number(e.target.value) });
    // setStep(Number(e.target.value));
    // console.log(step);
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <>
      <div className=" flex flex-col items-center mt-10 gap-3">
        <p>
          <input
            onChange={defineStep}
            type="range"
            value={step}
            min="1"
            max="10"
          />
          <span>{step}</span>
        </p>

        <div>
          <button onClick={dec} className=" p-2 bg-blue-500 text-white">
            -
          </button>

          <input
            className=" p-2"
            type="number"
            placeholder={step}
            onChange={defineCount}
            value={count}
          />

          <button onClick={inc} className=" p-2 bg-blue-500 text-white">
            +
          </button>
        </div>

        <p>
          Date :
          {date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <button onClick={reset} className=" p-2 bg-red-500 text-white">
          Reset
        </button>
      </div>
    </>
  );
}
