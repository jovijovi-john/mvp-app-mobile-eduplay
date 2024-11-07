interface PageProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClassname?: string;
}

export default function Page({
  children,
  containerClassname,
  ...props
}: PageProps) {
  return (
    <div
      {...props}
      className={`bg-black h-full w-full flex justify-center text-white overflow-hidden ${props.className}`}
    >
      <main
        className={`max-w-lg bg-sky-500 w-full h-full p-8 flex flex-col ${containerClassname}`}
      >
        {children}
      </main>
    </div>
  );
}
