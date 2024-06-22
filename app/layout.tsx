import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "BasePay",
  description: "Fiat to Crypto payments with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@400,600,700&display=swap"
        rel="stylesheet"
      ></link>
      <body>{children}</body>
    </html>
  );
}
