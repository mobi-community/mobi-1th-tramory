// 여행 계획 데이터 타입
export type TravelPlanType = {
  title?: string;
  id?: number;
  startDate?: string;
  endDate?: string;
  theme?: string;
  isPublic?: boolean;
  isComplete?: string;
  isRecord?: string;
  user?: { nickname?: string };
  travelDailyPlansDetails?: TravelDailyPlansDetails[];
};

// 여행 기록 데이터 타입
export type TravelRecordType = {
  title?: string;
  id?: number;
  startDate?: string;
  endDate?: string;
  theme?: string;
  isPublic?: boolean;
  isComplete?: string;
  isRecord?: string;
  user?: { nickname?: string };
  travelHashTags?: TravelHashTags[];
  travelDailyPlansDetails?: TravelDailyPlansDetails[];
};

export type TravelHashTags = {
  id?: number;
  hashTag?: {
    name?: string;
  };
};

// 상세 모달 데이터 타입
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
