import PropTypes from "prop-types";
import styles from "./newsletter-container.module.css";

const NewsletterContainer = ({ className = "" }) => {
  return (
    <header className={[styles.newsletterContainer, className].join(" ")}>
      <div className={styles.newsletterContent}>
        <h1 className={styles.stayUptoDate}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon} alt="" src="/frame-10.svg" />
            <div className={styles.enterYourEmail}>
              Enter your email address
            </div>
          </div>
          <div className={styles.subscribeToNewsletterWrapper}>
            <div className={styles.subscribeToNewsletter}>
              Subscribe to Newsletter
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

NewsletterContainer.propTypes = {
  className: PropTypes.string,
};

export default NewsletterContainer;
