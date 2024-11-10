export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12 justify-center h-full min-w-64 max-w-64 mx-auto">{children}</div>
  );
}
