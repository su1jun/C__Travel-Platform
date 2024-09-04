import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import { Inter } from "next/font/google";

import ToasterProvider from '@/app/providers/ToasterProvider';

import ClientOnly from './components/ClientOnly';
import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import RentModal from '@/app/components/modals/RentModal';

import getCurrentUser from './actions/getCurrentUser';
import "./globals.css";

export const metadata: Metadata = {
  title: "Arihub",
  description: "Arihub Clone",
};

const font = Nunito({ 
  subsets: ['latin'], 
});

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
