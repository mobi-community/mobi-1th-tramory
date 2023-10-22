/**
 * Todo
 * 여행계획 & 여행기록에 대한 다른 문구
 */

export type TravelPlanStep1config = typeof travelPlanStep1config;
export type TravelRecordStep1config = typeof travelRecordStep1config;
import step1Image from '../app/(needLogin)/travel/_mocks/step1Image.png';

export const travelPlanStep1config = {
  step1Image,
  title: 'WANDERLUST',
  description: '(n.) the wish to travel far away and to many different places',
  rightSectionTitle: 'AIR TICKET',
  rightSectionDescription: '여행 계획을 시작해볼까요?',
  inputPlaceholder: '여행의 제목을 설정해주세요',
};

export const travelRecordStep1config = {
  step1Image,
  title: 'WANDERLUST',
  description: '(n.) the wish to travel far away and to many different places',
  rightSectionTitle: 'AIR TICKET',
  rightSectionDescription: '여행을 떠나볼까요?',
  inputPlaceholder: '여행의 제목을 설정해주세요',
};
