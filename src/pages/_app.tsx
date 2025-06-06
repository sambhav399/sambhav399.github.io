import type { AppProps } from 'next/app';

function RenderComponent({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

function MyApp(props: AppProps) {
  return <RenderComponent {...props} />;
}

export default MyApp;
