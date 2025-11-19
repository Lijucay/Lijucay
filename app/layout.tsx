import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css"
import React from "react";

export const metadata: Metadata = {
  title: "Lijucay",
  description: "Official website for Lijucay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>Lijucay</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght,ROND@6..144,1..1000,100&display=swap"
            rel="stylesheet"/>
    </head>
    <body>
        {children}
    </body>
    </html>
  );
}
