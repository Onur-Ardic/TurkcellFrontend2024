import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./review-card-one.module.css";

const ReviewCardOne = ({
  className = "",
  sarahM,
  imBlownAwayByTheQualityAn,
  propFilter,
  propMinHeight,
}) => {
  const reviewCardOneStyle = useMemo(() => {
    return {
      filter: propFilter,
      minHeight: propMinHeight,
    };
  }, [propFilter, propMinHeight]);

  return (
    <div
      className={[styles.reviewCardOne, className].join(" ")}
      style={reviewCardOneStyle}
    >
      <div className={styles.reviewCardTwo}>
        <div className={styles.reviewCardThree}>
          <div className={styles.reviewCardFour}>
            <img
              className={styles.reviewCardOneStars}
              alt=""
              src="/star-1-8.svg"
            />
            <img
              className={styles.reviewCardTwoStars}
              alt=""
              src="/star-2-8.svg"
            />
            <img
              className={styles.reviewCardThreeStars}
              alt=""
              src="/star-3-8.svg"
            />
            <img
              className={styles.reviewCardFourStars}
              alt=""
              src="/star-4-6.svg"
            />
            <img
              className={styles.reviewCardFiveStars}
              alt=""
              src="/star-5-6.svg"
            />
          </div>
          <div className={styles.customerName}>
            <div className={styles.customerNameField}>
              <b className={styles.sarahM}>{sarahM}</b>
              <img
                className={styles.reviewContentIcon}
                loading="lazy"
                alt=""
                src="/frame-5.svg"
              />
            </div>
            <blockquote className={styles.imBlownAway}>
              {imBlownAwayByTheQualityAn}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCardOne.propTypes = {
  className: PropTypes.string,
  sarahM: PropTypes.string,
  imBlownAwayByTheQualityAn: PropTypes.string,

  /** Style props */
  propFilter: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default ReviewCardOne;
