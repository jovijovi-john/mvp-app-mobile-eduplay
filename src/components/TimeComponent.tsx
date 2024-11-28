import React, { useEffect, useState } from "react";
import TimeIcon from "./TimeIcon";

export default function TimeComponent({ time }: { time: number }) {
  const [timeState, setTimeState] = useState(time);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeState((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timeInterval);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center gap-x-2">
      <TimeIcon />
      <span className="text-sky-600 font-bold text-4xl">
        {timeState === 60 ? "01" : "00"}:
        {timeState == 60 ? "00" : timeState < 10 ? "0" + timeState : timeState}
      </span>
    </div>
  );
}
