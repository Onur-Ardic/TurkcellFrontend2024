import NewArrivalsProductPlacehold from "./new-arrivals-product-placehold";
import PropTypes from "prop-types";
import styles from "./new-arrivals.module.css";

const NewArrivals = ({ className = "" }) => {
  return (
    <section className={[styles.newArrivals, className].join(" ")}>
      <div className={styles.newArrivalsContent}>
        <div className={styles.newArrivalsHeader}>
          <h1 className={styles.newArrivals1}>NEW ARRIVALS</h1>
        </div>
        <div className={styles.newArrivalsProducts}>
          <div className={styles.newArrivalsProductPlacehold}>
            <img
              className={styles.newArrivalsProductPlaceholdChild}
              loading="lazy"
              alt=""
              src="/frame-32@2x.png"
            />
            <div className={styles.tShirtWithTapeDetailsParent}>
              <b className={styles.tShirtWithTapeContainer}>
                T-
                <span className={styles.shirt}>SHIRT</span>
                {` `}
                <span className={styles.with}>WITH</span> T
                <span className={styles.ape}>APE</span> D
                <span className={styles.etails}>ETAILS</span>
              </b>
              <div className={styles.frameParent}>
                <div className={styles.starParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/star-3.svg"
                  />
                  <img className={styles.starIcon} alt="" src="/star-4.svg" />
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/star-5.svg"
                  />
                </div>
                <div className={styles.div}>
                  <span>4.5/</span>
                  <span className={styles.span}>5</span>
                </div>
              </div>
              <b className={styles.b}>$120</b>
            </div>
          </div>
          <div className={styles.newArrivalsProductPlacehold1}>
            <div className={styles.image8Wrapper}>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
            </div>
            <div className={styles.skinnyFitJeansParent}>
              <b className={styles.skinnyFitJeansContainer}>
                S<span className={styles.kinny}>KINNY</span> F
                <span className={styles.it}>IT</span> J
                <span className={styles.eans}>EANS</span>
              </b>
              <div className={styles.frameGroup}>
                <div className={styles.starGroup}>
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="/star-5-1.svg"
                  />
                </div>
                <div className={styles.div1}>
                  <span>3.5/</span>
                  <span className={styles.span1}>5</span>
                </div>
              </div>
              <div className={styles.parent}>
                <b className={styles.b1}>$240</b>
                <b className={styles.b2}>$260</b>
                <div className={styles.frameWrapper}>
                  <div className={styles.wrapper}>
                    <div className={styles.div2}>-20%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newArrivalsProductPlacehold2}>
            <img
              className={styles.newArrivalsProductPlaceholdItem}
              loading="lazy"
              alt=""
              src="/frame-34@2x.png"
            />
            <div className={styles.checkeredShirtParent}>
              <b className={styles.checkeredShirt}>
                <span>
                  C<span className={styles.heckered}>HECKERED</span> S
                  <span className={styles.hirt}>HIRT</span>
                </span>
              </b>
              <div className={styles.frameContainer}>
                <div className={styles.starContainer}>
                  <img
                    className={styles.frameChild6}
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.frameChild7}
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className={styles.frameChild8}
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className={styles.frameChild9}
                    alt=""
                    src="/star-4.svg"
                  />
                  <img
                    className={styles.frameChild10}
                    alt=""
                    src="/star-5.svg"
                  />
                </div>
                <div className={styles.div3}>
                  <span>4.5/</span>
                  <span className={styles.span2}>5</span>
                </div>
              </div>
              <b className={styles.b3}>$180</b>
            </div>
          </div>
          <NewArrivalsProductPlacehold
            frame38="/frame-38@2x.png"
            lEEVE="LEEVE"
            sHIRT="SHIRT"
            star5="/star-5.svg"
            prop="4.5/"
            prop1="$130"
            prop2="$160"
            prop3="-30%"
          />
        </div>
        <div className={styles.viewAllNewArrivals}>
          <div className={styles.viewAllNewArrivalsButton}>
            
            <a className={styles.viewAll}>View All</a>
          </div>
        </div>
        <div className={styles.newArrivalsContentChild} />
      </div>
    </section>
  );
};

NewArrivals.propTypes = {
  className: PropTypes.string,
};

export default NewArrivals;
