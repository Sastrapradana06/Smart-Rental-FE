export const formatDate = (tgl) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const [year, month, date] = tgl.split("-");
  return `${date} ${months[parseInt(month) - 1]} ${year}`;
};
