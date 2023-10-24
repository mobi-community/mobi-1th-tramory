import { StaticImageData } from 'next/image';

export interface Badge {
  image: StaticImageData;
  name?: string;
}

export interface MypageCardSectionProps {
  title: string;
  image: Badge[];
  defaultImage: StaticImageData;
}
