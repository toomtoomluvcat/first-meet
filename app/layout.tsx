import "./globals.scss";
import { Alumni_Sans, Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-Geist",
});

const alumni = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.style} ${alumni.variable}`}>
      <body>{children}</body>
    </html>
  );
}
