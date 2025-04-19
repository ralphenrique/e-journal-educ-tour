import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
  title: "E-Journal",
  description: "A simple e-journal app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className='flex pt-24 px-96 md:px-36'>
          <Nav />
          <div className="flex-1 border font-bold">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
