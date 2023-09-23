import React from "react";
import MainTime from "./MainTime";
import BreakTime from "./BreakTime";
import Timer from "./Timer";

const TimerContainer = () => {
  return (
    <div id="timer-container">
      <div id="edit-timer-container">
        <MainTime />
        <BreakTime />
      </div>
      <Timer />
    </div>
  );
};

export default TimerContainer;
