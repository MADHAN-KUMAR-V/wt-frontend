import React from "react";
import { DateRangePicker } from "rsuite";
import "./DateRange.css";

const DateRange = ({ handleChange, setValue, value, getLastMonthRange }) => {
  const handleDateChange = (dates) => {
    if (!dates) {
      const lastMonthRange = getLastMonthRange();
      setValue(lastMonthRange);
      handleChange(lastMonthRange);
    } else {
      setValue(dates);
      handleChange(dates);
    }
  };

  return (
    <DateRangePicker
      onChange={handleDateChange}
      value={value}
      placement="bottomEnd"
    />
  );
};

export default DateRange;
