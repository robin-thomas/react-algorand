import React, { useState, forwardRef } from "react";

import DatePicker from "react-datepicker";

import { DataConsumer } from "../utils/DataProvider";

import "react-datepicker/dist/react-datepicker.min.css";

const Calendar = forwardRef(({ isActive, date, onClick }, ref) => (
  <div ref={ref} className="custom-control custom-switch" onClick={onClick}>
    <input
      type="checkbox"
      className="custom-control-input"
      checked={isActive}
      onChange={() => console.log("")}
    />
    <label
      className="algorand-transferto-schedule-label custom-control-label"
      htmlFor="customSwitches"
    >
      <p>{isActive ? date.toLocaleString() : "Schedule this transaction"}</p>
    </label>
  </div>
));

const ScheduleDate = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <DataConsumer>
      {ctx => (
        <DatePicker
          withPortal
          showTimeInput
          selected={ctx.txScheduleDate}
          onChange={date => {
            ctx.setTxScheduleDate(date);
            setIsActive(true);
          }}
          onClickOutside={() => setIsActive(false)}
          customInput={
            <Calendar isActive={isActive} date={ctx.txScheduleDate} />
          }
        />
      )}
    </DataConsumer>
  );
};

export default ScheduleDate;
