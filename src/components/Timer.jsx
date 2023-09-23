import React, { useEffect, useRef } from "react";
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
import audioSrc from "../assets/alarm.mp3";

const Timer = () => {
  const timer = useSelector((state) => state.timer);
  const mainTime = useSelector((state) => state.mainTime);
  const breakTime = useSelector((state) => state.breakTime);
  const isBreak = useSelector((state) => state.isBreak);
  const timerInterval = useSelector((state) => state.interval);
  const dispatch = useDispatch();

  const audioRef = useRef();

  useEffect(() => {
    if (timer < 0) {
      if (isBreak) {
        dispatch(changeTimer(mainTime));
      } else {
        dispatch(changeTimer(breakTime));
      }
      audioRef.current.play();
      dispatch(toggleIsBreak());
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
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    if (isBreak) dispatch(toggleIsBreak());
  };

  return (
    <div id="timer" className="flex flex-col justify-center items-center gap-3">
      <span id="timer-label" className="font-bold">
        {isBreak ? "Break" : "Session"}
      </span>
      <span id="time-left" className="text-4xl">
        {Math.floor(timer / 60) < 10 ? "0" : ""}
        {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
        {timer % 60}
      </span>
      <button
        id="start_stop"
        onClick={handleClick}
        className="bg-slate-300 px-3 rounded-xl"
      >
        Start/Pause
      </button>
      <button
        id="reset"
        onClick={handleReset}
        className="bg-slate-300 px-3 rounded-xl"
      >
        reset
      </button>
      <audio id="beep" src={audioSrc} ref={audioRef} type="audio/mp3" />
    </div>
  );
};

export default Timer;
