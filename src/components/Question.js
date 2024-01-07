import QuestionIndividual from "./QuestionIndividual";

const Question = ({ question, answer, dispatch }) => {
  // console.log(question);
  return (
    <div className=" flex flex-col gap-3 text-white">
      <h2 className=" text-3xl font-serif">{question.question}</h2>
      <QuestionIndividual
        question={question}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Question;
