export interface StoryType {
  id: string;
  user: {
    profileImage: string;
    userId: string;
    date: Date;
  };
  content: {
    date: Date;
    category: string;
    location: string;
    title: string;
    text: string;
    images: string[];
    liked: number;
    viewed: number;
    tags: string[];
  };
  isRecord: boolean;
  isDraft: boolean;
  detailDescription: {
    day: number;
    date: Date;
    country: string;
    location: string;
    description: string;
  }[];
}

export interface CommonStoryProps {
  story: StoryType;
  // eslint-disable-next-line no-unused-vars
  handleMoveToDetail: (id: string) => void;
}
