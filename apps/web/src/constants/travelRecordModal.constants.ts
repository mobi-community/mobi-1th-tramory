export type TravelRecordOptionConfig = typeof travelRecordOptionConfig;

export const travelRecordOptionConfig = [
  {
    id: 'SIMPLE_RECORD',
    label: '간편 기록하기',
    bgColor: 'bg-gray-500',
    fontColor: 'text-white',
    redirectUrl: '/travel/plan?stepId=0',
  },
  {
    id: 'DETAILED_RECORD',
    label: '상세 기록하기',
    bgColor: 'bg-gray-200',
    fontColor: 'text-black',
    redirectUrl: '/travel/record?stepId=0',
  },
];
