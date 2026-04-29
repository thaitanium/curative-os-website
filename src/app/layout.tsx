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
  title: 'Curative OS | CRM for Curative Investors',
  description:
    'The CRM built for curative investors. Track deals, underwrite with AI, manage cash flow, and scale your curative investing business.',
  metadataBase: new URL('https://curativeos.com'),
  openGraph: {
    title: 'Curative OS | CRM for Curative Investors',
    description:
      'The CRM built for curative investors. Track deals, underwrite with AI, manage cash flow, and scale your curative investing business.',
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
