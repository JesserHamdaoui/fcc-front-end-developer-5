import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTimer,
  decreaseTimer,
  pauseTimer,
  startTimer,
  toggleIsBreak,
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

  const handleStart = () => {
    dispatch(
      startTimer(
        setInterval(() => {
          dispatch(decreaseTimer());
        }, 1000)
      )
    );
  };

  const handlePause = () => {
    clearInterval(timerInterval);
    dispatch(pauseTimer());
  };

  const handleReset = () => {
    clearInterval(timerInterval);
    dispatch(pauseTimer());
    dispatch(changeTimer(mainTime));
    if (isBreak) dispatch(toggleIsBreak());
  };

  return (
    <div id="timer">
      <span>{isBreak ? "Break: " : "Session: "}</span>
      <span>{timer} minute(s) left </span>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
