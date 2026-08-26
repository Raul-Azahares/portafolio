import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raul Code | Interactive Portfolio",
  description: "A command-driven developer portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
