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
    <div>
      <span id="session-label">Session Length</span>
      <button onClick={handleDecrease} id="session-decrement">
        -
      </button>
      <span id="session-length">{Math.floor(mainTime / 60)}</span>
      <button onClick={handleIncrease} id="session-increment">
        +
      </button>
    </div>
  );
};

export default MainTime;
