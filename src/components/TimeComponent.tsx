import React from "react";
import TimeIcon from "./TimeIcon";

export default function TimeComponent() {
  return (
    <div className="w-full flex justify-center items-center gap-x-2">
      <TimeIcon />
      <span className="text-sky-600 font-bold text-4xl">01:00</span>
    </div>
  );
}
