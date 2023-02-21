import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="time">
      <div className="saat">
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <div className="gun">
        <h1>{dayNames[time.getDay()]}</h1>
      </div>
      <div>
        <h3>{time.toLocaleDateString()}</h3>
      </div>
    </div>
  );
};

export default Time;
