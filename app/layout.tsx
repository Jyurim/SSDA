import React, { Suspense } from "react";
import "../styles/global.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Providers from "@components/Providers";
import Loading from "./info/loading";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSDA",
  description: "Make your own",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="./page.tsxfavicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>;
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
