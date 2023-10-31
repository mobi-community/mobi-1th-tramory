import { StaticImageData } from 'next/image';

type ItemType = {
  title: string;
  slug: string;
  description: {
    title: string;
    subtitle?: string;
  }[];
  info: {
    title: string;
    description: string;
  };
};

export type OneBadgeSlideProps = {
  item: ItemType;
  badgeDefault: StaticImageData;
  id: number;
};
