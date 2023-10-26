import { StaticImageData } from 'next/image';

export type storyUserType = {
  profileImage: string;
  userId: string;
  date: Date;
};

export type storyContentType = {
  title: string;
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
};

export type CommonStoryProps = {
  story: storyType;
  width: number;
  height: number;
};
