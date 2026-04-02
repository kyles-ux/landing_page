import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VN Excellence",
  description: "VN Excellence Landing Page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
