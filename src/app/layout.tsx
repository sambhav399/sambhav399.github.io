import * as React from 'react';
import type { Metadata, Viewport } from 'next';
import config from '@/config';
import ThemeProvider from '@/components/theme-provider';
import '@/styles/globals.css';
import Layout from '../components/Layout';

const href = config.PORTFOLIO_URL;
const title = `${config.PORTFOLIO_TITLE} | ${config.PORTFOLIO_POSITION}`;
const description = config.PORTFOLIO_DESCRIPTION;

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': config.PORTFOLIO_TITLE,
  'url': href,
  'sameAs': config.PORTFOLIO_DATA.DATA_CONTACT.map(contact => contact.link),
  'jobTitle': config.PORTFOLIO_POSITION,
  'worksFor': {
    '@type': 'Organization',
    'name': 'BOLD Technologies Pvt. Ltd.'
  },
  description
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(href),
  title,
  description,
  applicationName: 'Sambhav',
  authors: [{ name: config.PORTFOLIO_TITLE }],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: href,
    languages: {
      'en-US': href
    }
  },
  icons: {
    shortcut: '/favicon/favicon.ico',
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }]
  },
  openGraph: {
    title,
    description,
    url: href,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/sambhav_sharma.png' }]
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: config.PORTFOLIO_TITLE,
    images: ['/sambhav_sharma.png']
  },
  other: {
    'apple-mobile-web-app-title': 'Sambhav'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
