import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTimer, updateMainTime } from "../redux/timer/timerActions";

const MainTime = () => {
  const mainTime = useSelector((state) => state.mainTime);
  const timerInterval = useSelector((state) => state.interval);
  const isBreak = useSelector((state) => state.isBreak);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (timerInterval || mainTime === 1) return;
    dispatch(updateMainTime(mainTime - 1));
    if (!isBreak) dispatch(changeTimer(mainTime - 1));
  };

  const handleIncrease = () => {
    if (timerInterval) return;
    dispatch(updateMainTime(mainTime + 1));
    if (!isBreak) dispatch(changeTimer(mainTime + 1));
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span> {mainTime} minute(s) </span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default MainTime;
