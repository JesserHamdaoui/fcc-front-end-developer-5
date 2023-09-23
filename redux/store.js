import { createStore } from "redux";
import { timerReducer } from "./timer/timerReducer";

export const store = createStore(timerReducer());
