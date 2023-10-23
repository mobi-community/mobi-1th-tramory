import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ThemeProvider } from 'ui';

import UseQueryProviders from '../store/queryClient';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Web App',
  description: 'Welcome to Next.js 13',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
          rel='stylesheet'
        />
      </head>
      <body className={inter.className}>
        <UseQueryProviders>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </UseQueryProviders>
      </body>
    </html>
  );
}
