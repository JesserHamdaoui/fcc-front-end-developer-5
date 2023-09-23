import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTimer, updateBreakTime } from "../redux/timer/timerActions";

const BreakTime = () => {
  const breakTime = useSelector((state) => state.breakTime);
  const timerInterval = useSelector((state) => state.interval);
  const isBreak = useSelector((state) => state.isBreak);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (timerInterval || breakTime === 1) return;
    dispatch(updateBreakTime(breakTime - 1));
    if (isBreak) dispatch(changeTimer(breakTime - 1));
  };

  const handleIncrease = () => {
    if (timerInterval) return;
    dispatch(updateBreakTime(breakTime + 1));
    if (isBreak) dispatch(changeTimer(breakTime + 1));
  };

  return (
    <div id="break-time">
      <button onClick={handleDecrease}>-</button>
      <span> {breakTime} minute(s) </span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default BreakTime;
