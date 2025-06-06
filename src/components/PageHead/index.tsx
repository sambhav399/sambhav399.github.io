import React from 'react';
import Head from 'next/head';

const PageHead: React.FC = () => {
  const href = 'https://sambhav399.github.io/';
  const title = `Sambhav Sharma - Engineering and Product Management`;
  const description = `Senior Full Stack Engineer passionate about crafting powerful digital experiences, leading engineering teams and AI-powered projects with robust engineering.`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="alternate" href={href} hrefLang="en-us" />

      {/* Bot Crawlers */}
      <meta name="robots" content="follow, index" />

      {/* Primary Meta Tags */}
      <meta name="author" content="Sambhav Sharma" />
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
      <meta property="twitter:creator" content="Sambhav Sharma" />
    </Head>
  );
};

export default PageHead;
