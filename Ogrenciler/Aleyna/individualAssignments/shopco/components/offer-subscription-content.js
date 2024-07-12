import PropTypes from "prop-types";
import styles from "./offer-subscription-content.module.css";

const OfferSubscriptionContent = ({ className = "" }) => {
  return (
    <div className={[styles.offerSubscriptionContent, className].join(" ")}>
      <div className={styles.offerSubscriptionForm}>
        <h1 className={styles.stayUptoDate}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className={styles.emailField}>
          <div className={styles.emailInput}>
            <img
              className={styles.emailPlaceholderIcon}
              alt=""
              src="/frame-10.svg"
            />
            <div className={styles.enterYourEmail}>
           <input type="text" class="mail-input" placeholder="Enter your mail address"></input>
            </div>
          </div>
          <div className={styles.subscriptionButton}>
          
              <button className={styles.subscribeToNewsletter}> Subscribe to Newsletter</button>
             
      
          </div>
        </div>
      </div>
    </div>
  );
};

OfferSubscriptionContent.propTypes = {
  className: PropTypes.string,
};

export default OfferSubscriptionContent;
