export const isToday = (someDate: Date) => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

export const isYesterday = (someDate: Date) => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() - 1 &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};
