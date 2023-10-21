'use client';

import { PropsWithChildren } from 'react';

import initMocks from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  initMocks();
}

const Providers = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default Providers;
