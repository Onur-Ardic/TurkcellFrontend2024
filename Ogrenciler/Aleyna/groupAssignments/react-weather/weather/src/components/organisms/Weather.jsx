import React from "react";
import CardGroup from "../molecules/CardGroup/CardGroup";
import InputGroup from "../molecules/InputGroup/InputGroup";
import TextGroup from "../molecules/TextGroup/TextGroup";
import styles from "./styles.module.css";

const Weather = () => {
  return (
    <div className={styles.groups}>
      <InputGroup />
      <TextGroup
        date="24.09.2018"
        day="Pazartesi"
        degree="10"
        description="Açık"
        humidity="17"
        min="0"
        max="1"
        night="-9"
      />
      <CardGroup />
    </div>
  );
};

export default Weather;
