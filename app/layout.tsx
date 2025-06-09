import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyanshu Edits",
  description: "Divyanshu Edits - A passionate video editor",
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
