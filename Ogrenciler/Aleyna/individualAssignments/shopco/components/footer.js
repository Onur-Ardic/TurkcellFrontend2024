import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.helpMenu}>
        <div className={styles.companyInfo}>
          <b className={styles.shopco}>SHOP.CO</b>
          <div className={styles.companyDescription}>
            <div className={styles.weHaveClothes}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </div>
            <div className={styles.socialLinks}>
              <img
                className={styles.socialLinkIcon}
                loading="lazy"
                alt=""
                src="/1.svg"
              />
              <img
                className={styles.socialLinkIcon1}
                loading="lazy"
                alt=""
                src="/2.svg"
              />
              <img
                className={styles.socialLinkIcon2}
                loading="lazy"
                alt=""
                src="/3.svg"
              />
              <img
                className={styles.socialLinkIcon3}
                loading="lazy"
                alt=""
                src="/4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.helpMenuColumn}>
          <div className={styles.helpMenu1}>Company</div>
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
        <div className={styles.helpMenuColumn1}>
          <div className={styles.helpMenu2}>Help</div>
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
        <div className={styles.helpMenuColumn2}>
          <div className={styles.helpMenu3}>FAQ</div>
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
        <div className={styles.helpMenuColumn3}>
          <div className={styles.helpMenu4}>Resources</div>
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
      <div className={styles.copyright}>
        <div className={styles.footerDivider} />
        <div className={styles.copyrightSocial}>
          <div className={styles.allRightsReservedWrapper}>
            <div className={styles.allRightsReserved}>
              Shop.co © 2000-2023, All Rights Reserved
            </div>
          </div>
          <div className={styles.wrapperBadgeParent}>
            <div className={styles.wrapperBadge}>
              <img
                className={styles.badgeIcon}
                loading="lazy"
                alt=""
                src="/badge.svg"
              />
            </div>
            <div className={styles.wrapperBadge1}>
              <img
                className={styles.badgeIcon1}
                loading="lazy"
                alt=""
                src="/badge-1.svg"
              />
            </div>
            <div className={styles.wrapperBadge2}>
              <img
                className={styles.badgeIcon2}
                loading="lazy"
                alt=""
                src="/badge-2.svg"
              />
            </div>
            <div className={styles.wrapperBadge3}>
              <img
                className={styles.badgeIcon3}
                loading="lazy"
                alt=""
                src="/badge-3.svg"
              />
            </div>
            <div className={styles.wrapperBadge4}>
              <img
                className={styles.badgeIcon4}
                loading="lazy"
                alt=""
                src="/badge-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
