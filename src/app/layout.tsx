import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matralleta Coffee Co',
  description: 'Matralleta Coffee Co',
  openGraph: {
    title: 'Matralleta Coffee Co',
    description: 'Matralleta Coffee Co',
    image: '/og-image.jpg',
    width: 1200,
    height: 630,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    image: '/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
