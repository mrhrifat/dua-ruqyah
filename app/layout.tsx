/**
 * Title: layout
 * Description:
 * Filename: layout.tsx
 * Path: /app/layout.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Nov 07, 2023
 * Last Updated Date: Nov 07, 2023
 *
 */

import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./utils/font";

export const metadata: Metadata = {
  title: "Dua Ruqyah",
  description: "Dua Ruqyah",
  icons: {
    icon: "./logo.svg",
    shortcut: "./logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light-900 scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
