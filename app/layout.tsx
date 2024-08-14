import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import { Inter } from "next/font/google";

import ClientOnly from './components/ClientOnly';
import Navbar from '@/app/components/navbar/Navbar';
import Modal from '@/app/components/modals/Modal';
import "./globals.css";

export const metadata: Metadata = {
  title: "Arihub",
  description: "Arihub Clone",
};

const font = Nunito({ 
  subsets: ['latin'], 
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="Hello World" isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
