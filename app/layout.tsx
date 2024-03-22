import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./lib/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Url shorten",
  description: "app for genarate short urls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono min-h-screen w-screen">
        <Navbar />
        <main className="flex flex-col items-center mx-4">{children}</main>
      </body>
    </html>
  );
}
