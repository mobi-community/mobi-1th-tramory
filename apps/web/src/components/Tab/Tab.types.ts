import { ReactNode } from 'react';

export interface TabProps {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  slug: string;
  tabTitle?: string;
  bgColor?: string;
  zIndex?: string;
}
