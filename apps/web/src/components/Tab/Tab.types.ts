import { ReactNode } from 'react';

export interface TabProps {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  handleClickTab?: (page: string) => void;
  current?: string;
  bgColor: string;
  zIndex: string;
}
