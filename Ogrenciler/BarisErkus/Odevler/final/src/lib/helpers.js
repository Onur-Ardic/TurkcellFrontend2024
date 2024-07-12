export const calculateRating = (comments) => {
  const totalRate = comments?.reduce((acc, comment) => {
    return acc + comment.rating;
  }, 0);
  return totalRate !== 0 ? totalRate / comments?.length : 0;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const monthName = monthNames[d.getMonth()];

  return `Posted on ${monthName} ${d.getDate()}, ${d.getFullYear()}`;
};
