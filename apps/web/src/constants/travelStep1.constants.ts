export type CommonStep1Config = typeof commonStep1Config;
export type TravelPlanStep1config = typeof travelPlanStep1config;
export type TravelRecordStep1config = typeof travelRecordStep1config;
import step1Image from '../app/(needLogin)/travel/_mocks/step1Image.png';

// 공통 설정
const commonStep1Config = {
  step1Image,
  title: 'WANDERLUST',
  description: '(n.) the wish to travel far away and to many different places',
  rightSectionTitle: 'AIR TICKET',
  inputPlaceholder: '여행의 제목을 설정해주세요',
};

// 여행 계획 설정
export const travelPlanStep1config = {
  ...commonStep1Config,
  rightSectionDescription: '여행 계획을 시작해볼까요?',
};

// 여행 기록 설정
export const travelRecordStep1config = {
  ...commonStep1Config,
  rightSectionDescription: '여행을 떠나볼까요?',
};
