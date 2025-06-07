import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Layout from '@/components/Layout';
import PageHead from '@/components/PageHead';
import { initMixpanel } from '@/config/mixpanel';
import GlobalStyled from '@/styles/Global.styled';
import LenisStyled from '@/styles/Lenis.styled';
import ThemeStyled from '@/styles/Theme.styled';

function RenderComponent({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initMixpanel();
  }, []);

  return (
    <ThemeProvider theme={ThemeStyled() as DefaultTheme}>
      <GlobalStyled />
      <LenisStyled />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

function MyApp(props: AppProps) {
  return (
    <>
      <PageHead />
      <RenderComponent {...props} />
    </>
  );
}

export default MyApp;
