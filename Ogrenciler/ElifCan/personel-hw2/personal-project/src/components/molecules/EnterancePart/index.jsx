import classNames from "classnames";
import React from "react";
import personPicture from "../../../assets/personPicture.png";
import Button from "../../atom/button";
import styles from "./Enterance.module.css";
const index = () => {
  function handleChange() {
    console.log("burda");
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=elifcan0777@gmail.com"
    );
  }
  return (
    <>
      <div
        className={classNames(styles.containerr, styles.Dflex, styles.relative)}
      >
        <img className={styles.enteranceimg} src={personPicture} alt="Person" />
        <Button
          className={styles.reachButton}
          onChange={handleChange}
          text={"Send Email"}
        ></Button>
      </div>
    </>
  );
};

export default index;
