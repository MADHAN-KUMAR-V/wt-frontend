import React, { useState } from "react";
import { DateRangePicker } from "rsuite"; 
import './DateRange.css'; 

const DateRange = ({ handleChange }) => {
  const [value, setValue] = useState(getLastMonthRange());

  function getLastMonthRange() {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 1);
    return [startDate, endDate];
  }

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
