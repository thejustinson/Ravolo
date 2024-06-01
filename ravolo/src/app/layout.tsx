import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravolo",
  description: "Ravolo leverages blockchain technology to create a secure, transparent, and innovative experience for event organizers and attendees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-neutral-950 to-neutral-900 text-neutral-50`}>{children}</body>
    </html>
  );
}
