import { StaticImageData } from 'next/image';

export interface MyStoryPlanCardProps {
  planData: PlanDataType;
  // eslint-disable-next-line no-unused-vars
  handleMoveToDetail: (id: string) => void;
}

export interface UserDataType {
  profileImage: string;
  userId: string;
  date: Date;
}

export interface ContentDataType {
  date: string;
  location: string;
  title: string;
  text: string;
  images?: StaticImageData[];
  liked?: number;
  viewed?: number;
  tags?: string[];
}

export interface DetailDescriptionType {
  day: number;
  country: string;
  location: string;
  description: string;
}
