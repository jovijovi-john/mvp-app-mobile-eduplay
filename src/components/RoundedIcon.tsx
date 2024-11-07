import React from "react";
import { IconType } from "react-icons";

type RoundedIconTypes = {
  Icon: IconType;
  size?: number;
  color?: string;
  background?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RoundedIcon({
  Icon,
  size = 4,
  color = "text-sky-600",
  background = "white",
  ...props
}: RoundedIconTypes) {
  return (
    <div
      {...props}
      className={`${props.className} rounded-full inline-flex p-4 cursor-pointer`}
      style={{
        backgroundColor: background ? background : "#fff",
      }}
    >
      <Icon className={`${color}`} size={size} />
    </div>
  );
}
