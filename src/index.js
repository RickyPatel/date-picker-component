import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import DoubleDate from "./components/DoubleDate";
import reducer from "./reducers";
import { subspace } from "redux-subspace";

const store = createStore(reducer);

const date1Store = subspace((state) => state.date1, "date1")(store);
const date2Store = subspace((state) => state.date2, "date2")(store);

const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <div>
      <DoubleDate date1Store={date1Store} date2Store={date2Store}></DoubleDate>
    </div>,
    rootEl
  );
};

render();
store.subscribe(render);
