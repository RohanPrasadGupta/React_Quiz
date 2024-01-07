import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className=" mt-5 text-xl w-24 p-4 bg-black/50 rounded-full text-white">
      {mins < 10 && "0"}
      {mins} : {sec < 10 && "0"} {sec}
    </div>
  );
}

export default Timer;
