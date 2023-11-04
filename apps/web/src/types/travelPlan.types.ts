export type TravelPlanType = {
  title?: string;
  id?: number;
  startDate?: string;
  endDate?: string;
  theme?: number;
  isPublic?: boolean;
  isComplete?: string;
  isRecord?: string;
  user?: { nickname?: string };
  travelHashTags?: TravelHashTags[];
  travelDailyPlansDetails?: TravelDailyPlansDetails[];
};

export type User = {
  nickname?: string;
};

export type TravelHashTags = {
  id?: number;
  hashTag?: {
    name?: string;
  };
};

export type TravelDailyPlansDetails = {
  id?: number;
  sequence?: number;
  latitude?: string;
  longitude?: string;
  description?: string;
  country?: {
    id?: number;
    countryName?: string;
    countryNameKr?: string;
  };
  city?: {
    id?: number;
    cityName?: string;
    cityNameKr?: string;
  };
};
