import { ReactNode } from 'react';

export interface TabProps {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  handleClickTab?: (page: string) => void;
  page?: string;
  bgColor: string;
  zIndex: string;
}
