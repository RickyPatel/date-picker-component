import { combineReducers } from "redux";
import { namespaced } from "redux-subspace";

const initialState = {
  date: null,
  showDatepicker: false,
};

const dateReducer = (state = initialState, action) => {
  if (action.type === "focusChange") {
    return {
      ...state,
      showDatepicker: action.payload,
    };
  }
  if (action.type === "update") {
    console.log(action.payload);
    return action.payload;
  }
  return state;
};

export default combineReducers({
  date1: namespaced("date1")(dateReducer),
  date2: namespaced("date2")(dateReducer),
  date3: namespaced("date3")(dateReducer),
  date4: namespaced("date4")(dateReducer),
});
