import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/layout/navbar/navbar";
import Footer from "@/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio ",
  description: "Ce ceci est  le portfolio de VIRY Brandon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className + " bg-color" } >
      <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
