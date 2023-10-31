import { StaticImageData } from 'next/image';

type DataType = {
  ko: string;
  en: string;
  bannerImg: StaticImageData;
  continentData: {
    img: StaticImageData;
    name: string;
  }[];
};

export type FlagInfoDataProps = {
  data: DataType;
  id: number;
};
