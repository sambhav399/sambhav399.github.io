import type { Metadata } from 'next';
import ThemeProvider from '@/components/theme-provider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sambhav Sharma',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="layout">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
