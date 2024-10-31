import React from "react";
import { IconType } from "react-icons";

type RoundedIconTypes = {
  Icon: IconType;
  size?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RoundedIcon({
  Icon,
  size = 4,
  ...props
}: RoundedIconTypes) {
  return (
    <div
      {...props}
      className={`${props.className} rounded-full bg-white inline-flex p-4 cursor-pointer`}
    >
      <Icon className="text-sky-600" size={size} />
    </div>
  );
}
