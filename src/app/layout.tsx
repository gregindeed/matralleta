import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matralleta - Coffee Truck & Street Culture',
  description: 'San Diego-based coffee truck meets street culture. Honest espresso, bold vibes, and stories served fresh.',
  openGraph: {
    title: 'Matralleta',
    description: 'Coffee truck + street culture from San Diego',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
