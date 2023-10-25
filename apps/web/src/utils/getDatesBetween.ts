export const getDatesBetween = (startDate, endDate) => {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let dates = [];

  function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0에서 시작하기 때문에 1을 더해줍니다.
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  while (start <= end) {
    dates.push(formatDate(start)); // 변환된 문자열 형식의 날짜를 배열에 추가합니다.
    start.setDate(start.getDate() + 1);
  }

  return dates;
};
