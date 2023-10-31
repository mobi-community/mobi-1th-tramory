// n개월 범위 기간 구하는 로직
export const getPastDateRange = (period: number): [Date, Date] => {
  const endDate = new Date();
  const startDate = new Date();

  startDate.setMonth(startDate.getMonth() - period);

  return [startDate, endDate];
};
