import React, { useEffect, useState } from "react";
import img1 from "../../../assets/projectPictures/project1.jpeg";
import img2 from "../../../assets/projectPictures/project2.jpeg";
import img3 from "../../../assets/projectPictures/project3.jpeg";
import styles from "./Projects.module.css";
const index = ({ project }) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    console.log(project);
    if (project.picture == "project1") {
      setImg(img1);
    } else if (project.picture == "project2") {
      setImg(img2);
    } else {
      setImg(img3);
    }
  }, []);
  return (
    <>
      <div className={styles.card}>
        <img className={styles.cardImg} src={img} alt="" />
        <div className={styles.exp}>
          <h1>{project.projectName}</h1>
          <p className={styles.colorBlack}>{project.languages}</p>
        </div>
      </div>
    </>
  );
};

export default index;
