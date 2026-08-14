import type { Metadata } from 'next';
import { Inter, Archivo_Black } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://matralleta.com'),
  title: 'Matralleta Coffee Co. — Small Batch. Fully Loaded.',
  description:
    'Small-batch specialty coffee with Baja California roots, shipped anywhere. A tight four-cut roster — Dual Wield, Ratatatat, Quick Draw, Double Feed. Join the list to hear first when we go live.',
  keywords: [
    'Matralleta',
    'Matralleta Coffee',
    'small batch coffee',
    'specialty coffee',
    'Baja California coffee',
    'San Diego coffee roaster',
    'Mexican coffee',
    'small batch coffee roster',
    'whole bean coffee',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Matralleta Coffee Co.',
    description:
      'Small batch. Fully loaded. Baja-born coffee, shipped wherever you are.',
    url: 'https://matralleta.com',
    siteName: 'Matralleta Coffee Co.',
    type: 'website',
    locale: 'en_US',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matralleta Coffee Co. — Small Batch. Fully Loaded.',
    description:
      'Baja-born small-batch coffee in a tight four-cut roster. Join the list to hear first.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://matralleta.com/#org',
      name: 'Matralleta Coffee Co.',
      url: 'https://matralleta.com',
      logo: 'https://matralleta.com/logo_01.png',
      email: 'hello@matralleta.com',
      parentOrganization: { '@type': 'Organization', name: 'Baja Vibes Co.' },
      description:
        'Small-batch specialty coffee roasted in Baja California with San Diego street culture roots, shipped anywhere.',
      areaServed: ['US', 'MX'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Diego',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://matralleta.com/#website',
      url: 'https://matralleta.com',
      name: 'Matralleta Coffee Co.',
      publisher: { '@id': 'https://matralleta.com/#org' },
    },
    {
      '@type': 'ItemList',
      name: 'The Lineup',
      description:
        'A tight four-cut roster of small-batch coffees.',
      itemListElement: [
        {
          '@type': 'Product',
          position: 1,
          name: 'Dual Wield',
          description:
            'Medium roast, the balanced daily driver. Honey and cinnamon notes.',
          brand: { '@id': 'https://matralleta.com/#org' },
        },
        {
          '@type': 'Product',
          position: 2,
          name: 'Ratatatat',
          description:
            'Dark roast strong cut, single origin Chiapas, Mexico. Cocoa and chili notes.',
          brand: { '@id': 'https://matralleta.com/#org' },
        },
        {
          '@type': 'Product',
          position: 3,
          name: 'Quick Draw',
          description:
            'Light roast, single origin Ethiopia. Citrus and honeysuckle notes.',
          brand: { '@id': 'https://matralleta.com/#org' },
        },
        {
          '@type': 'Product',
          position: 4,
          name: 'Double Feed',
          description:
            'Espresso roast, two-origin blend. Dark chocolate and brown sugar notes. Built for double shots.',
          brand: { '@id': 'https://matralleta.com/#org' },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${archivo.variable} font-sans bg-[#f2ddc5] text-[#2c1e14] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
