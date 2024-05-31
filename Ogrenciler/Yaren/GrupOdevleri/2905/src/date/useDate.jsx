import { useEffect, useState } from "react";

export const useDate = (inputDate) => {
  const locale = "en-US";
  const [date, setDate] = useState(new Date(inputDate));

  useEffect(() => {
    if (inputDate) {
      setDate(new Date(inputDate));
    }
  }, [inputDate]);

  const day = date.toLocaleDateString(locale, { weekday: "long" });
  const formattedDate = `${day}, ${date.getDate()} ${date.toLocaleDateString(
    locale,
    {
      month: "long",
    }
  )}`;
  const time = date.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return {
    day,
    formattedDate,
    time,
  };
};
