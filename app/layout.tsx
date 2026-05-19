import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HireSphere | Modern Job Board",
  description: "Find your dream job instantly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-indigo-600 flex items-center gap-2">
              <span>💼</span> HireSphere
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Find Jobs</Link>
              <Link href="/employer/post" className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Post a Job</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HireSphere Project Assessment.
        </footer>
      </body>
    </html>
  );
}