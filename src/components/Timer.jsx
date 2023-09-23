import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTimer,
  decreaseTimer,
  pauseTimer,
  startTimer,
  toggleIsBreak,
  updateBreakTime,
  updateMainTime,
} from "../redux/timer/timerActions";

const Timer = () => {
  const timer = useSelector((state) => state.timer);
  const mainTime = useSelector((state) => state.mainTime);
  const breakTime = useSelector((state) => state.breakTime);
  const isBreak = useSelector((state) => state.isBreak);
  const timerInterval = useSelector((state) => state.interval);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timer === 0) {
      if (isBreak) {
        dispatch(changeTimer(mainTime));
        dispatch(toggleIsBreak());
      } else {
        dispatch(changeTimer(breakTime));
        dispatch(toggleIsBreak());
      }
    }
  }, [timer]);

  const handleClick = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      dispatch(pauseTimer());
    } else {
      dispatch(
        startTimer(
          setInterval(() => {
            dispatch(decreaseTimer());
          }, 1000)
        )
      );
    }
  };

  const handleReset = () => {
    clearInterval(timerInterval);
    dispatch(pauseTimer());
    dispatch(changeTimer(1500));
    dispatch(updateMainTime(1500));
    dispatch(updateBreakTime(300));
    if (isBreak) dispatch(toggleIsBreak());
  };

  return (
    <div id="timer">
      <span id="timer-label">{isBreak ? "Break" : "Session"}</span>
      <span id="time-left">
        {Math.floor(timer / 60) < 10 ? "0" : ""}
        {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
        {timer % 60}
      </span>
      <button id="start_stop" onClick={handleClick}>
        Start/Pause
      </button>
      <button id="reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default Timer;
