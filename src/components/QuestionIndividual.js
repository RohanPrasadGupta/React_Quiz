const QuestionIndividual = ({ question, answer, dispatch }) => {
  const hasAnswered = answer !== null;

  return (
    <div className=" flex flex-col gap-3">
      {question.options.map((option, index) => (
        <button
          className={` bg-black/80 p-3 rounded-full text-xl border-white border-2 hover:translate-x-4  hover:bg-black/30 ${
            index === answer ? "translate-x-7" : ""
          }   ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-green-400"
                : "bg-orange-400"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionIndividual;
