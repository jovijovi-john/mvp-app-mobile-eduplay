interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-sky-700 text-white font-semibold rounded-full py-4 px-8 text-2xl hover:bg-sky-900 transition-all duration-300 ${props.className}`}
    >
      {text.toLocaleUpperCase()}
    </button>
  );
}
