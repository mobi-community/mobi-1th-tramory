import { StaticImageData } from 'next/image';

import { DetailDescriptionType } from '@/app/(needLogin)/mypage/my_story/_components/MyStoryPlanCard/MyStoryPlanCard.types';

export type storyUserType = {
  profileImage: string;
  userId: string;
  date: string;
};

export type storyContentType = {
  title: string;
  date?: string;
  location?: string;
  text: string;
  images: StaticImageData[];
  liked: number;
  viewed: number;
  tags: string[];
};

export type storyType = {
  id: number;
  user: storyUserType;
  content: storyContentType;
  detailDescription?: DetailDescriptionType[];
  isRecord?: boolean;
  isDraft?: boolean;
};

export type CommonStoryProps = {
  story?: storyType;
  // eslint-disable-next-line no-unused-vars
  handleMoveToDetail?: (id: number | string) => void;
  width?: number;
  height?: number;
};
