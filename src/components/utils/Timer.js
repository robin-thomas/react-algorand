import React, { useState, useEffect } from "react";

import distance from "date-fns/formatDistanceToNow";

const Timer = ({ date }) => {
  const [time] = useState(
    date instanceof Date && isFinite(date) ? date : new Date()
  );
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const intervalId = setInterval(
      () => setTimeStr(distance(time, { includeSeconds: true })),
      1000
    );
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <p style={{ fontSize: "15px", textDecoration: "underline" }}>{timeStr}</p>
  );
};

export default Timer;
