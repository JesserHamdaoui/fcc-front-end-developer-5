import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTimer, updateMainTime } from "../redux/timer/timerActions";

const MainTime = () => {
  const mainTime = useSelector((state) => state.mainTime);
  const timerInterval = useSelector((state) => state.interval);
  const isBreak = useSelector((state) => state.isBreak);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (timerInterval || mainTime === 60) return;
    dispatch(updateMainTime(mainTime - 60));
    if (!isBreak) dispatch(changeTimer(mainTime - 60));
  };

  const handleIncrease = () => {
    if (timerInterval || mainTime === 3600) return;
    dispatch(updateMainTime(mainTime + 60));
    if (!isBreak) dispatch(changeTimer(mainTime + 60));
  };

  return (
    <div id="session-time" className="flex flex-col items-center gap-2">
      <span id="session-label" className="font-bold">
        Session Length
      </span>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          id="session-decrement"
          className="w-7 h-7 flex justify-center items-center font-bold bg-slate-300 rounded-lg"
        >
          -
        </button>
        <span id="session-length">{Math.floor(mainTime / 60)}</span>
        <button
          onClick={handleIncrease}
          id="session-increment"
          className="w-7 h-7 flex justify-center items-center font-semibold bg-slate-300 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MainTime;
