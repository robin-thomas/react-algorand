import React, { useState, forwardRef } from "react";

import DatePicker from "react-datepicker";

import { DataConsumer } from "../utils/DataProvider";

import "react-datepicker/dist/react-datepicker.min.css";

import "./ScheduleDate.css";

const Calendar = forwardRef(
  ({ ctx, isActive, date, disabled, onClick }, ref) => (
    <div ref={ref} className="custom-control custom-switch" onClick={onClick}>
      <input
        type="checkbox"
        className="custom-control-input"
        checked={isActive}
        onChange={() => ctx.setTxScheduleDate(new Date())}
        disabled={disabled}
      />
      <label
        className="algorand-transferto-schedule-label custom-control-label"
        htmlFor="customSwitches"
      >
        <p>{isActive ? date.toLocaleString() : "Schedule this transaction"}</p>
      </label>
    </div>
  )
);

const ScheduleDate = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <DataConsumer>
      {ctx => (
        <DatePicker
          withPortal
          timeInputLabel="Time:"
          showTimeInput
          selected={ctx.txScheduleDate}
          onChange={date => {
            ctx.setTxScheduleDate(date);
            setIsActive(true);
          }}
          minDate={new Date()}
          onClickOutside={() => {
            setIsActive(false);
            ctx.setTxScheduleDate(new Date());
          }}
          customInput={
            <Calendar
              ctx={ctx}
              isActive={isActive}
              date={ctx.txScheduleDate}
              disabled={ctx.disabled}
            />
          }
        />
      )}
    </DataConsumer>
  );
};

export default ScheduleDate;
