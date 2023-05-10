import React from "react";
import "../styles/global.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { INavItem } from "@/types/interfaces";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSDA",
  description: "Make your own",
};

const navList: INavItem[] = [
  {
    name: "Make",
    path: "/make",
  },
  {
    name: "Board",
    path: "/board",
  },
  {
    name: "Info",
    path: "/info",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navList={navList} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
