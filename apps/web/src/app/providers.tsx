'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

import UseQueryProviders from '@/store/queryClient';

import initMocks from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  initMocks();
}

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <UseQueryProviders>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </UseQueryProviders>
  );
};

export default Providers;
