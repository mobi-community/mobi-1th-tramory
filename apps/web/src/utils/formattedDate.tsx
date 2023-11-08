export const formattedDateFunc = (date?: Date) => {
  if (!date) return null;
  const formattedDate = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}`;

  return formattedDate;
};
