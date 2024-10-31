export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black h-full w-full flex justify-center text-white overflow-hidden">
      <main className="max-w-lg bg-sky-500 w-full h-full p-8 flex flex-col">
        {children}
      </main>
    </div>
  );
}
