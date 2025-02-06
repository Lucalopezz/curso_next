import Header from "@/components/header";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aprendendo NextJS",
  description: "Aprendendo Metadata no Next",
  openGraph: {
    title: "Aprendendo NextJS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased  bg-gray-900 text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
