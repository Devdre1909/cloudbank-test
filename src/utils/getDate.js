export const getDate = () => {
  const date = new Date();

  const day = date.getDate();
  const weekday = date.toLocaleString("default", {
    weekday: "long",
  });
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const year = date.getFullYear();

  const dayWithOrdinal = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const fullString = `${weekday}, ${dayWithOrdinal(day)} ${month}, ${year}`;
  const htmlSting = ` <span class="dashboard-header__text--highlight">${weekday}</span>, ${dayWithOrdinal(
    day
  )} ${month} ${year}`;

  return {
    fullString,
    htmlSting,
  };
};
