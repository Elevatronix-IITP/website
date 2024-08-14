import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: ["/favicon.ico"],
  },
  title: "Elevatronix",
  description:
    "At Elevatronix Pvt. Ltd., we are at the forefront of a revolution in surgical technology, pioneering the automation of surgical instruments. By integrating cutting-edge technology into the operating room, we are transforming the way surgeries are performed, making them more precise, efficient, and safe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
