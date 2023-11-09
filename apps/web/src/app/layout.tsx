import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import FloatingMenu from '@/components/Floating_menu/FloatingMenu';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Web App',
  description: 'Welcome to Next.js 13',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
          rel='stylesheet'
        />
      </head>
      <body className='font-display'>
        <Providers>
          {children}
          <FloatingMenu />
        </Providers>
      </body>
    </html>
  );
}
