import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ThemeProvider } from 'ui';

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
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='flex min-h-[70vh] w-full flex-col overflow-hidden md:container'>
            <div className='flex w-full justify-end'></div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
