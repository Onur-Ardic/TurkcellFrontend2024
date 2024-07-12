import FrameComponent2 from "./frame-component2";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.cartItemWrapper, className].join(" ")}>
      <div className={styles.cartItem}>
        <div className={styles.itemInfo}>
          <div className={styles.itemDetails}>
            <img
              className={styles.itemDetailsChild}
              loading="lazy"
              alt=""
              src="/frame-332@2x.png"
            />
            <div className={styles.itemNamesParent}>
              <div className={styles.itemNames}>
                <div className={styles.itemName}>
                  <b className={styles.gradientGraphicTShirt}>
                    Gradient Graphic T-shirt
                  </b>
                  <div className={styles.sizeLargeParent}>
                    <div className={styles.sizeLarge}>
                      <span>{`Size: `}</span>
                      <span className={styles.large}>Large</span>
                    </div>
                    <div className={styles.colorWhite}>
                      <span>{`Color: `}</span>
                      <span className={styles.white}>White</span>
                    </div>
                  </div>
                </div>
                <b className={styles.b}>$145</b>
              </div>
              <FrameComponent2 />
            </div>
          </div>
          <div className={styles.itemDetails1} />
          <div className={styles.itemDetails2}>
            <img
              className={styles.itemDetailsItem}
              alt=""
              src="/frame-33-1@2x.png"
            />
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.checkeredShirtParent}>
                  <b className={styles.checkeredShirt}>
                    <span>
                      C<span className={styles.heckered}>HECKERED</span> S
                      <span className={styles.hirt}>HIRT</span>
                    </span>
                  </b>
                  <div className={styles.sizeMediumParent}>
                    <div className={styles.sizeMedium}>
                      <span>{`Size: `}</span>
                      <span className={styles.medium}>Medium</span>
                    </div>
                    <div className={styles.colorRed}>
                      <span>{`Color: `}</span>
                      <span className={styles.red}>Red</span>
                    </div>
                  </div>
                </div>
                <b className={styles.b1}>$180</b>
              </div>
              <FrameComponent2 />
            </div>
          </div>
          <div className={styles.itemDetails3} />
          <div className={styles.itemVariations}>
            <div className={styles.image9Wrapper}>
              <img
                className={styles.image9Icon}
                loading="lazy"
                alt=""
                src="/image-9@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.skinnyFitJeansParent}>
                  <b className={styles.skinnyFitJeansContainer}>
                    S<span className={styles.kinny}>KINNY</span> F
                    <span className={styles.it}>IT</span> J
                    <span className={styles.eans}>EANS</span>
                  </b>
                  <div className={styles.sizeLargeGroup}>
                    <div className={styles.sizeLarge1}>
                      <span>{`Size: `}</span>
                      <span className={styles.large1}>Large</span>
                    </div>
                    <div className={styles.colorBlue}>
                      <span>{`Color: `}</span>
                      <span className={styles.blue}>Blue</span>
                    </div>
                  </div>
                </div>
                <b className={styles.b2}>$240</b>
              </div>
              <FrameComponent2 />
            </div>
          </div>
        </div>
        <div className={styles.orderDetails}>
          <h3 className={styles.orderSummary}>Order Summary</h3>
          <div className={styles.subtotalParent}>
            <div className={styles.subtotal}>Subtotal</div>
            <b className={styles.b3}>$565</b>
          </div>
          <div className={styles.discount20Parent}>
            <div className={styles.discount20}>Discount (-20%)</div>
            <b className={styles.b4}>-$113</b>
          </div>
          <div className={styles.deliveryFeeParent}>
            <div className={styles.deliveryFee}>Delivery Fee</div>
            <b className={styles.b5}>$15</b>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameParent1}>
              <div className={styles.totalWrapper}>
                <div className={styles.total}>Total</div>
              </div>
              <b className={styles.totalValue}>$467</b>
            </div>
          </div>
          <div className={styles.promoCodeInputParent}>
            <div className={styles.promoCodeInput}>
              <img className={styles.frameIcon} alt="" src="/frame-15.svg" />
              <div className={styles.addPromoCode}>Add promo code</div>
            </div>
            <div className={styles.applyWrapper}>
              <div className={styles.apply}>Apply</div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.goToCheckoutWrapper}>
              <div className={styles.goToCheckout}>Go to Checkout</div>
            </div>
            <img
              className={styles.arrowDownBold1Icon}
              alt=""
              src="/arrowdownbold-11@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
