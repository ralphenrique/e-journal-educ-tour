import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { menuItems } from "@/app/menu-items";
import Nav from "@/components/Nav";
import NextPageButton from "@/components/ui/NextPageButton";
import LenisProvider from './LenisProvider';

const inter = Inter({ subsets: ['latin'] });


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
    <html lang="en" className={`${inter.className}`} >
      <body
        className='antialiased tracking-tight'
      >
        <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
          <Nav menuLinks={menuItems} />
          <main className=" h-min w-full space-y-6 my-20">
            <ViewTransition>{children}</ViewTransition>
            <NextPageButton />
          </main>
        </div>
      </body>
    </html>
  );
}

