import Head from 'next/head';
import config from '@/config';

function PageHead() {
  const href = config.PORTFOLIO_URL;
  const title = config.PORTFOLIO_TITLE;
  const description = config.PORTFOLIO_DESCRIPTION;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="alternate" href={href} hrefLang="en-us" />

      {/* Favicon Icons */}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Sambhav" />

      {/* Bot Crawlers */}
      <meta name="robots" content="follow, index" />

      {/* Primary Meta Tags */}
      <meta name="author" content={title} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/sambhav_sharma.png" />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={href} />
      <meta property="twitter:image" content="/sambhav_sharma.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={title} />
    </Head>
  );
}

export default PageHead;
