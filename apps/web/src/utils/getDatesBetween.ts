export const getDatesBetween = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates = [];

  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0에서 시작하기 때문에 1을 더해줍니다.
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  while (start <= end) {
    dates.push(formatDate(start)); // 변환된 문자열 형식의 날짜를 배열에 추가합니다.
    start.setDate(start.getDate() + 1);
  }

  return dates;
};
