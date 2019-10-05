import React, { useState, useEffect } from "react";

import distance from "date-fns/formatDistanceToNow";
import isPast from "date-fns/isPast";
import format from "date-fns/format";
import isDate from "date-fns/isDate";

const Timer = ({ date }) => {
  const [timeStr, setTimeStr] = useState(format(date, "PPpp"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDate(date)) {
        clearInterval(intervalId);
        setTimeStr("");
      } else if (isPast(date)) {
        clearInterval(intervalId);
        setTimeStr(format(date, "PPpp"));
      } else {
        setTimeStr(`${distance(date, { includeSeconds: true })} remaining`);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  return <p style={{ fontSize: "15px", marginBottom: "0px" }}>{timeStr}</p>;
};

export default Timer;
