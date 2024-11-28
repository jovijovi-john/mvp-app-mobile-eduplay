import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AnswerButton({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
