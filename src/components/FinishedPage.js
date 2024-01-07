export default function FinishedPage({
  maxPossiblePoints,
  points,
  highScore,
  dispatch,
}) {
  const scorePercentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;

  if (scorePercentage === 100) emoji = "🎉";
  if (scorePercentage >= 80 && scorePercentage < 100) emoji = "😁";
  if (scorePercentage >= 10 && scorePercentage < 80) emoji = "😒";
  if (scorePercentage >= 0 && scorePercentage < 10) emoji = "🤦‍♂️";

  return (
    <>
      <div className=" flex flex-col items-center gap-5">
        <div className="  text-white text-2xl gap-5 p-3 bg-blue-600 rounded-full ">
          <p>
            {emoji} You got {points} point from total of {maxPossiblePoints}{" "}
            Score. ({scorePercentage} %)
          </p>
        </div>
        <p className=" text-white text-2xl">( High score is {highScore} )</p>

        <button
          className="text-white border-2 border-white bg-black/50 p-3 rounded-full hover:bg-white hover:text-black hover:border-black font-bold"
          onClick={() => dispatch({ type: "restart" })}
        >
          Re-start
        </button>
      </div>
    </>
  );
}
