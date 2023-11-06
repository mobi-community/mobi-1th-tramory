import { StaticImageData } from 'next/image';

export type FlagMockType = {
  ko: string;
  en: string;
  bannerImg: StaticImageData;
  continentData: {
    img: StaticImageData;
    name: string;
  }[];
};

export type FlagInfoDataProps = {
  data: FlagMockType;
  id: number;
};
