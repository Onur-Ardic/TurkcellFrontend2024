import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./styles.module.css";

const TextGroup = ({
  date,
  day,
  degree,
  description,
  humidity,
  min,
  max,
  night,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <Text text={date} />
        <Text text={day} />
        <Text text={degree} />
        <Text text={description} />
      </div>

      <div className={styles.col}>
        <Text text={humidity} />
        <Text text={min} />
        <Text text={max} />
        <Text text={night} />
      </div>
    </div>
  );
};

export default TextGroup;
