import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BasePay",
  description: "Fiat to Crypto payments with ease",
};

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable}`}>
      <body className="relative px-6 pt-4 font-generalSans leading-[1.25rem] text-black">
        <Navbar />
        <span className="absolute left-0 top-16 my-4 flex h-[2px] w-full bg-border" />
        {children}
      </body>
    </html>
  );
}
