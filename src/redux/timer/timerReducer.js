import {
  CHANGE_TIMER,
  DECREASE_TIMER,
  PAUSE_TIMER,
  START_TIMER,
  TOGGLE_IS_BREAK,
  UPDATE_BREAK_TIME,
  UPDATE_MAIN_TIME,
} from "./timerTypes";

const initialState = {
  mainTime: 25,
  breakTime: 5,
  timer: 25,
  isBreak: false,
  interval: null,
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_TIME:
      return { ...state, mainTime: action.time };
    case UPDATE_BREAK_TIME:
      return { ...state, breakTime: action.time };
    case DECREASE_TIMER:
      return { ...state, timer: state.timer - 1 };
    case TOGGLE_IS_BREAK:
      return { ...state, isBreak: !state.isBreak };
    case CHANGE_TIMER:
      return { ...state, timer: action.time };
    case START_TIMER:
      return { ...state, interval: action.interval };
    case PAUSE_TIMER:
      return { ...state, interval: null };
    default:
      return state;
  }
};
