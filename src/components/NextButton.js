export default function NextButton({ dispatch, answer, numQuesitons, index }) {
  if (answer === null) return null;

  if (index + 1 < numQuesitons)
    return (
      <button
        className=" mt-5 text-xl p-4 bg-black/50 rounded-full text-white"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index + 1 === numQuesitons)
    return (
      <button
        className=" mt-5 text-xl p-4 bg-black/50 rounded-full text-white"
        onClick={() => dispatch({ type: "finish" })}
      >
        Get Result
      </button>
    );
}
