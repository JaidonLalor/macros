import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <nav className="relative p-4">
        <Link href='/'>
          <p className="text-md underline text-red-500">Macros</p>
        </Link>
      </nav>
      <div className="flex flex-col gap-12 justify-center h-full min-w-64 max-w-64 mx-auto">
        {children}
      </div>
    </div>
  );
}
