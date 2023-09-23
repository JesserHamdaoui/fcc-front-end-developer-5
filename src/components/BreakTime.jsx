import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTimer, updateBreakTime } from "../redux/timer/timerActions";

const BreakTime = () => {
  const breakTime = useSelector((state) => state.breakTime);
  const timerInterval = useSelector((state) => state.interval);
  const isBreak = useSelector((state) => state.isBreak);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (timerInterval || breakTime === 60) return;
    dispatch(updateBreakTime(breakTime - 60));
    if (isBreak) dispatch(changeTimer(breakTime - 60));
  };

  const handleIncrease = () => {
    if (timerInterval || breakTime === 3600) return;
    dispatch(updateBreakTime(breakTime + 60));
    if (isBreak) dispatch(changeTimer(breakTime + 60));
  };

  return (
    <div id="break-time" className="flex flex-col items-center gap-2">
      <h2 id="break-label" className="font-bold">
        Break Length
      </h2>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          id="break-decrement"
          className="w-7 h-7 flex justify-center items-center font-bold bg-slate-300 rounded-lg"
        >
          -
        </button>
        <span id="break-length">{Math.floor(breakTime / 60)}</span>
        <button
          onClick={handleIncrease}
          id="break-increment"
          className="w-7 h-7 flex justify-center items-center font-semibold bg-slate-300 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BreakTime;
