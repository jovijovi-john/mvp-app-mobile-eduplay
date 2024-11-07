import React from "react";
import RoundedIcon from "./RoundedIcon";
import { FaUser } from "react-icons/fa";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  playerName: string;
}

export default function PlayerComponent({ playerName, ...props }: Props) {
  return (
    <div
      {...props}
      className={`flex items-center  gap-x-4 bg-white p-4 rounded-3xl text-xl font-semibold ${props.className}`}
    >
      <RoundedIcon Icon={FaUser} size={36} color="white" background="#0ea5e9" />
      <span className="text-sky-600">{playerName}</span>
    </div>
  );
}
