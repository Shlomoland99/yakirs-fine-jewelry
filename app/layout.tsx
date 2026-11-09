import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yakir's Fine Jewelry",
  description: "Timeless elegance. Frost Yourself with Yakir's Fine Jewelry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}