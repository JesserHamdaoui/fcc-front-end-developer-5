import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBreakTime } from "../redux/timer/timerActions";

const BreakTime = () => {
  const breakTime = useSelector((state) => state.BreakTime);
  const dispatch = useDispatch();

  return (
    <div id="break-time">
      <button onClick={() => dispatch(updateBreakTime(breakTime - 1))}>
        -
      </button>
      {breakTime}
      <button onClick={() => dispatch(updateBreakTime(breakTime + 1))}>
        +
      </button>
    </div>
  );
};

export default BreakTime;
