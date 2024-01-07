export default function Progress({
  index,
  numQuesiton,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header>
      <progress
        max={numQuesiton}
        value={index + Number(answer !== null)}
        className=" w-full mb-3"
      />

      <div className="flex flex-row justify-between">
        <p className=" text-xl text-white mb-5">
          Question : <strong>{index + 1}</strong> / {numQuesiton}
        </p>
        <p className=" text-xl text-white mb-5">
          Ponits : <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}
