import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  name: string;
  placeholder?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function InputWithIcon({
  Icon,
  name,
  placeholder,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`bg-white rounded-3xl w-full py-6 px-4 flex gap-x-4 hover:cursor-pointer`}
    >
      <Icon className="text-sky-500" size={32} />
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        className="bg-transparent w-full text-sky-700 outline-none caret-sky-500 text-2xl placeholder-zinc-400"
      />
    </div>
  );
}
