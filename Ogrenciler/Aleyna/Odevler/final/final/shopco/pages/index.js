import Navigation1 from "../components/navigation1";
import Brands from "../components/brands";
import NewArrivals from "../components/new-arrivals";
import TopSellingProducts from "../components/top-selling-products";
import BrowseStyle from "../components/browse-style";
import ReviewCardOne from "../components/review-card-one";
import OfferSubscriptionContent from "../components/offer-subscription-content";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <img className={styles.homepageChild} alt="" src="/rectangle-2@2x.png" />
      <div className={styles.signUp}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
      <Navigation1 />
      <Brands />
      <NewArrivals />
      <section className={styles.topSelling}>
        <div className={styles.topSellingContent}>
          <div className={styles.topSellingHeader}>
            <h1 className={styles.topSelling1}>TOP SELLING</h1>
          </div>
          <TopSellingProducts />
          <div className={styles.viewAllTopSelling}>
            <div className={styles.topSellingViewAllContainer}>
              <a className={styles.viewAll}>View All</a>
            </div>
          </div>
          <BrowseStyle />
        </div>
      </section>
      <div className={styles.customerReview}>
        <div className={styles.customerReviewHeader}>
          <div className={styles.customerReviewTitle}>
            <h1 className={styles.ourHappyCustomers}>OUR HAPPY CUSTOMERS</h1>
          </div>
          <div className={styles.reviewNavigation}>
            <img
              className={styles.arrowDownBold2Icon}
              alt=""
              src="/arrowdownbold-2@2x.png"
            />
            <img
              className={styles.arrowDownBold1Icon}
              alt=""
              src="/arrowdownbold-1@2x.png"
            />
          </div>
        </div>
      </div>
      <section className={styles.customerReviewCarousel}>
        <ReviewCardOne
          sarahM="Sarah M."
          imBlownAwayByTheQualityAn={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
        />
        <ReviewCardOne
          sarahM="Sarah M."
          imBlownAwayByTheQualityAn={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
          propFilter="unset"
          propMinHeight="240px"
        />
        <ReviewCardOne
          sarahM="Alex K."
          imBlownAwayByTheQualityAn={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
          propFilter="unset"
          propMinHeight="unset"
        />
        <ReviewCardOne
          sarahM="James L."
          imBlownAwayByTheQualityAn={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
          propFilter="unset"
          propMinHeight="unset"
        />
        <ReviewCardOne
          sarahM="Mooen"
          imBlownAwayByTheQualityAn={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
          propFilter="blur(4px)"
          propMinHeight="unset"
        />
      </section>
      <section className={styles.offerSubscription}>
        <OfferSubscriptionContent />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
