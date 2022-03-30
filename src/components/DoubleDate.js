import React from "react";
import DateInput from "./DateInput";

const DoubleDate = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
      }}
    >
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
      </div>

      <div>
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
    </div>
  );
};

export default DoubleDate;
