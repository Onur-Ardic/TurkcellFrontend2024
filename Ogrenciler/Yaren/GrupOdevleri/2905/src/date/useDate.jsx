import { useEffect, useState } from "react";

export const useDate = (initialDate) => {
  const locale = "en-US";
  const [date, setDate] = useState(new Date(initialDate));

  useEffect(() => {
    if (initialDate) {
      setDate(new Date(initialDate));
    }
  }, [initialDate]);

  const day = date.toLocaleDateString(locale, { weekday: "long" });
  const time = date.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return {
    day,
    time,
  };
};
