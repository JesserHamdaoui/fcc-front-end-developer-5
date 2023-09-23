import React from "react";
import MainTime from "./MainTime";
import BreakTime from "./BreakTime";
import Timer from "./Timer";

const TimerContainer = () => {
  return (
    <div
      id="timer-container"
      className="flex flex-col gap-3 justify-center items-center bg-slate-100 p-8 shadow-md rounded-xl"
    >
      <div id="time-edit-container" className="flex gap-5">
        <MainTime />
        <BreakTime />
      </div>
      <Timer />
    </div>
  );
};

export default TimerContainer;
