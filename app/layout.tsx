import React from "react";
import "../styles/global.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Providers from "@components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSDA",
  description: "Make your own",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
