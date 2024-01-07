export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className=" flex flex-col items-center gap-4">
      <h1 className=" text-white text-3xl">Welcome to React Quiz</h1>
      <h3 className=" text-white font-bold text-2xl">
        {numQuestions} question to test your react mastery...
      </h3>
      <button
        className=" text-white border-2 border-white bg-black/50 p-3 rounded-full hover:bg-white hover:text-black hover:border-black font-bold"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}
