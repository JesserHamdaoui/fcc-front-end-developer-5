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
    <div id="break-time">
      <span id="break-label">Break Length</span>
      <button onClick={handleDecrease} id="break-decrement">
        -
      </button>
      <span id="break-length">{Math.floor(breakTime / 60)}</span>
      <button onClick={handleIncrease} id="break-increment">
        +
      </button>
    </div>
  );
};

export default BreakTime;
