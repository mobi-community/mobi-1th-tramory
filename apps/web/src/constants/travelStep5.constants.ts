export type TravelPlanStep5config = typeof travelPlanStep5config;
export type TravelRecordStep5config = typeof travelRecordStep5config;

//공통
export const commonStep5Config = {
  button: '저장하기',
};

// 여행 계획 설정
export const travelPlanStep5config = {
  ...commonStep5Config,
  title: '나만의 여행 계획 남기기',
  description: '다가올 여행을 기다리며 계획을 남겨보아요! ',
};

// 여행 기록 설정
export const travelRecordStep5config = {
  ...commonStep5Config,
  title: '나만의 여행 기록 남기기',
  description: `즐거운 여행 되셨나요? <br /> 소중한 여행의 추억을 생생하게 기록으로 남겨보세요!`,
  privateSetting: '여행 기록 나만보기',
};
