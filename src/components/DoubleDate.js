import React from "react";
import DateInput from "./DateInput";

const DoubleDate = (props) => {
  return (
    <div>
      <DateInput
        value={props.date1Store.getState()}
        onChangeHandler={(data) => {
          props.date1Store.dispatch({ type: "update", payload: data });
        }}
        onFocusChangeHandler={(data) => {
          props.date1Store.dispatch({ type: "focusChange", payload: data });
        }}
      ></DateInput>
      <DateInput
        value={props.date2Store.getState()}
        onChangeHandler={(data) => {
          props.date2Store.dispatch({ type: "update", payload: data });
        }}
        onFocusChangeHandler={(data) => {
          props.date2Store.dispatch({ type: "focusChange", payload: data });
        }}
      ></DateInput>
    </div>
  );
};

export default DoubleDate;
