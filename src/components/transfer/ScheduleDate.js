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
        onChange={() => ctx.setTxDate(new Date())}
        disabled={disabled}
      />
      <label
        className="algorand-transferto-schedule-label custom-control-label"
        htmlFor="customSwitches"
        title="Schedule this transaction for future"
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
          selected={ctx.txDate ? ctx.txDate : new Date()}
          onChange={date => {
            ctx.setTxDate(date);
            setIsActive(true);
          }}
          minDate={new Date()}
          onClickOutside={() => {
            setIsActive(false);
            ctx.setTxDate(new Date());
          }}
          customInput={
            <Calendar
              ctx={ctx}
              isActive={isActive}
              date={ctx.txDate ? ctx.txDate : new Date()}
              disabled={ctx.disabled}
            />
          }
        />
      )}
    </DataConsumer>
  );
};

export default ScheduleDate;
