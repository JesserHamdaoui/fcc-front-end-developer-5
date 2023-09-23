import { createStore } from "redux";
import { timerReducer } from "../src/redux/timer/timerReducer";

export const store = createStore(timerReducer());
