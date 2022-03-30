import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import DoubleDate from "./components/DoubleDate";
import reducer from "./reducers";
import { subspace } from "redux-subspace";

const store = createStore(reducer);

const date1Store = subspace((state) => state.date1, "date1")(store);
const date2Store = subspace((state) => state.date2, "date2")(store);

const date3Store = subspace((state) => state.date3, "date3")(store);
const date4Store = subspace((state) => state.date4, "date4")(store);

const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <div style={{ display: "flex", alignItems: "center" }}>
      <DoubleDate date1Store={date1Store} date2Store={date2Store}></DoubleDate>
      <DoubleDate date1Store={date3Store} date2Store={date4Store}></DoubleDate>
    </div>,
    rootEl
  );
};

render();
store.subscribe(render);
