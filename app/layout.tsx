import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import { Inter } from "next/font/google";

import ToasterProvider from '@/app/providers/ToasterProvider';

import ClientOnly from './components/ClientOnly';
import Navbar from '@/app/components/navbar/Navbar';
import RegisterModal from '@/app/components/modals/RegisterModal';
import LoginModal from '@/app/components/modals/LoginModal';
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
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
