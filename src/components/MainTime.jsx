import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMainTime } from "../redux/timer/timerActions";

const MainTime = () => {
  const mainTime = useSelector((state) => state.mainTime);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(updateMainTime(mainTime - 1))}>-</button>
      <span> {mainTime} minute(s) </span>
      <button onClick={() => dispatch(updateMainTime(mainTime + 1))}>+</button>
    </div>
  );
};

export default MainTime;
