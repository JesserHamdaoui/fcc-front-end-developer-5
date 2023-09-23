import {
  CHANGE_TIMER,
  DECREASE_TIMER,
  TOGGLE_IS_BREAK,
  UPDATE_BREAK_TIME,
  UPDATE_MAIN_TIME,
} from "./timerTypes";

const initialState = {
  mainTimer: 25,
  breakTimer: 5,
  timer: 25,
  isBreak: false,
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_TIME:
      return { ...state, mainTimer: action.time };
    case UPDATE_BREAK_TIME:
      return { ...state, breakTimer: action.time };
    case DECREASE_TIMER:
      return { ...state, timer: state.timer - 1 };
    case TOGGLE_IS_BREAK:
      return { ...state, isBreak: !state.isBreak };
    case CHANGE_TIMER:
      return { ...state, timer: action.time };
    default:
      return state;
  }
};
