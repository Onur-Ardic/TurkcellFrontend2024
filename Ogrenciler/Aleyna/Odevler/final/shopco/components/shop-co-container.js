import PropTypes from "prop-types";
import styles from "./shop-co-container.module.css";

const ShopCoContainer = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.shopcoParent}>
          <b className={styles.shopco}>SHOP.CO</b>
          <div className={styles.weHaveClothes}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </div>
        </div>
        <div className={styles.social}>
          <img className={styles.icon} alt="" src="/1.svg" />
          <img className={styles.icon1} alt="" src="/2.svg" />
          <img className={styles.icon2} alt="" src="/3.svg" />
          <img className={styles.icon3} alt="" src="/4.svg" />
        </div>
      </div>
      <div className={styles.helpMenuParent}>
        <div className={styles.helpMenu}>Company</div>
        <div className={styles.aboutFeaturesWorksContainer}>
          <p className={styles.about}>{`About          `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.features}>{`Features          `}</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.works}>{`Works          `}</p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.career}>{`Career  `}</p>
        </div>
      </div>
      <div className={styles.helpMenuGroup}>
        <div className={styles.helpMenu1}>Help</div>
        <div className={styles.aboutFeaturesWorksContainer1}>
          <p className={styles.customerSupport}>Customer Support</p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.deliveryDetails}>Delivery Details</p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.termsConditions}>{`Terms & Conditions`}</p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.privacyPolicy}>Privacy Policy</p>
        </div>
      </div>
      <div className={styles.helpMenuContainer}>
        <div className={styles.helpMenu2}>FAQ</div>
        <div className={styles.aboutFeaturesWorksContainer2}>
          <p className={styles.account}>Account</p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.manageDeliveries}>Manage Deliveries</p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.orders}>Orders</p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.payments}>Payments</p>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.helpMenu3}>Resources</div>
        <div className={styles.aboutFeaturesWorksContainer3}>
          <p className={styles.freeEbooks}>Free eBooks</p>
          <p className={styles.blankLine9}>&nbsp;</p>
          <p className={styles.developmentTutorial}>Development Tutorial</p>
          <p className={styles.blankLine10}>&nbsp;</p>
          <p className={styles.howTo}>How to - Blog</p>
          <p className={styles.blankLine11}>&nbsp;</p>
          <p className={styles.youtubePlaylist}>Youtube Playlist</p>
        </div>
      </div>
    </div>
  );
};

ShopCoContainer.propTypes = {
  className: PropTypes.string,
};

export default ShopCoContainer;
