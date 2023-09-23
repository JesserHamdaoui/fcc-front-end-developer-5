import React from "react";
import TimerContainer from "./components/TimerContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <div id="app" className="flex justify-center items-center h-screen">
      <Provider store={store}>
        <TimerContainer />
      </Provider>
    </div>
  );
};

export default App;
