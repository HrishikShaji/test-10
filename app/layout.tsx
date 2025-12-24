import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "test-10",
  description: "test-10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
