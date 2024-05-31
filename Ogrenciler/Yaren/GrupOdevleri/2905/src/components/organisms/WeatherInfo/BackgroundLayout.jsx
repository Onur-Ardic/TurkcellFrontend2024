import React from "react";
import styles from "./BackgroundLayout.module.css";

const BackgroundLayout = () => {
  const gifUrl =
    "https://i.pinimg.com/originals/d6/09/80/d60980cd1c030e1d016fc43b34ca0300.gif";

  return (
    <div className={styles.backgroundLayout}>
      <img src={gifUrl} alt="background gif" className={styles.backgroundGif} />
    </div>
  );
};

export default BackgroundLayout;
