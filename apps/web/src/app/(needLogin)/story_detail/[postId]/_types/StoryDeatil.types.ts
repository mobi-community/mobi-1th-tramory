export interface StoryDetailType {
  id: number;
  user: UserDataType;
  content: ContentDataType;
  detailDescription: DetailDescriptionType[];
  isRecord?: boolean;
  isDraft?: boolean;
}

export interface MyStoryPlanCardProps {
  storyDetail: StoryDetailType;
  // eslint-disable-next-line no-unused-vars
  handleMoveToDetail: (id: string) => void;
}

export interface UserDataType {
  profileImage: string;
  userId: string;
  date: string;
}

export interface ContentDataType {
  date: string;
  location: string;
  title: string;
  text: string;
  images?: string[];
  liked?: number;
  viewed?: number;
  category: string;
  tags?: string[];
}

export interface DetailDescriptionType {
  day: number;
  country: string;
  location: string;
  description: string;
  date: string;
}
