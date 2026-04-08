import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "erichology publics",
  description:
    "hosting current and past publications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              erichology
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-indigo-700 transition-colors">
                home
              </Link>
              <Link
                href="/blog"
                className="hover:text-indigo-700 transition-colors"
              >
                blog
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} erichology. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
