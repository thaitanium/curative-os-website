// Stub localStorage before any modules that might use it
if (typeof window === 'undefined') {
  if (!globalThis.localStorage || typeof globalThis.localStorage.getItem !== 'function') {
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      },
      writable: true,
      configurable: true,
    });
  }
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/sections/Nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Curative OS | The CRM for Messy-Title Real Estate Deals',
  description:
    'Messy titles. Clean pipeline. One CRM. Curative OS is the operating system for curative real estate investing — AI underwriting, cash tracking, and a pipeline built for the way curative deals actually work.',
  metadataBase: new URL('https://curativeos.com'),
  openGraph: {
    title: 'Curative OS | The CRM for Messy-Title Real Estate Deals',
    description:
      'Messy titles. Clean pipeline. One CRM. Curative OS is the operating system for curative real estate investing — AI underwriting, cash tracking, and a pipeline built for the way curative deals actually work.',
    url: 'https://curativeos.com',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
