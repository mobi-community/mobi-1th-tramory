export const formattedDateFunc = (date: Date) => {
  const formattedDate = `${date?.getFullYear()}.${
    date?.getMonth() + 1
  }.${date?.getDate()}`;

  return formattedDate;
};
