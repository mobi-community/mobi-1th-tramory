import { DetailDescriptionType } from '@/app/(needLogin)/mypage/my_story/_components/MyStoryPlanCard/MyStoryPlanCard.types';

export type storyUserType = {
  profileImage: string;
  userId: string;
  date: string;
};

export type storyContentType = {
  title?: string;
  date?: string;
  location?: string;
  text: string;
  images: string[];
  liked: number;
  viewed: number;
  category: string;
  tags: string[];
};

export type storyType = {
  id: number | string;
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
