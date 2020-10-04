import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./createStore";
import Calculator from "./Calculator";
import "./style.scss";

const Main = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Calculator />
      </React.StrictMode>
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
