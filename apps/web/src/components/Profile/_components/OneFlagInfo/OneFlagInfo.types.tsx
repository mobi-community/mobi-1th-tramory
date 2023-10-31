import { StaticImageData } from 'next/image';

type OneFlagInfoType = {
  img: StaticImageData;
  name: string;
};

export type OneFlagInfoProps = {
  item: OneFlagInfoType;
};
