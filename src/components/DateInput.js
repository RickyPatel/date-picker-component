import { DateSingleInput } from "@datepicker-react/styled";

const DateInput = (props) => {
  return (
    <DateSingleInput
      onDateChange={(data) => {
        props.onChangeHandler(data);
      }}
      onFocusChange={(focusedInput) => {
        props.onFocusChangeHandler(focusedInput);
      }}
      date={props.value.date}
      showDatepicker={props.value.showDatepicker}
    />
  );
};

export default DateInput;
