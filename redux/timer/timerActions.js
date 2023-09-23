import {
  CHANGE_TIMER,
  DECREASE_TIMER,
  TOGGLE_IS_BREAK,
  UPDATE_BREAK_TIME,
  UPDATE_MAIN_TIME,
} from "./timerTypes";

export const updateMainTime = (time) => {
  return {
    type: UPDATE_MAIN_TIME,
    time,
  };
};

export const updateBreakTime = (time) => {
  return {
    type: UPDATE_BREAK_TIME,
    time,
  };
};

export const decreaseTimer = () => {
  return {
    type: DECREASE_TIMER,
  };
};

export const toggleIsBreak = () => {
  return {
    type: TOGGLE_IS_BREAK,
  };
};

export const changeTimer = (time) => {
  return {
    type: CHANGE_TIMER,
    time,
  };
};
