import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-background text-foreground h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="absolute top-4 left-4">
            <Link href='/'>
              <p className="text-md underline text-red-500">Macros v4</p>
            </Link>
          </nav>
          <main className="h-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
