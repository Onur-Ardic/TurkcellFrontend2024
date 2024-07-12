import ProductDetails from "./product-details";
import SizesmHierarchySecondaryG from "./sizesm-hierarchy-secondary-g";
import StateHoveractiveShapeSqua from "./state-hoveractive-shape-squa";
import SizesmHierarchySecondaryG1 from "./sizesm-hierarchy-secondary-g1";
import PropTypes from "prop-types";
import styles from "./breadcrumbs-and-filters.module.css";

const BreadcrumbsAndFilters = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumbsAndFilters, className].join(" ")}>
      <div className={styles.breadcrumbs}>
        <div className={styles.homeLink}>
          <div className={styles.homeLink1}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame4@2x.png"
            />
          </div>
          <a className={styles.casual}>Casual</a>
        </div>
        <div className={styles.filters}>
          <div className={styles.filterTitleWrapper}>
            <div className={styles.filterTitle}>
              <h3 className={styles.filters1}>Filters</h3>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-6.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.filterToggles}>
            <div className={styles.toggleDividers} />
          </div>
          <div className={styles.categoryListParent}>
            <div className={styles.categoryList}>
              <div className={styles.categoryItems}>
                <div className={styles.tShirts}>T-shirts</div>
              </div>
              <img className={styles.frameIcon2} alt="" src="/frame4@2x.png" />
            </div>
            <div className={styles.categoryList1}>
              <div className={styles.shortsWrapper}>
                <div className={styles.shorts}>Shorts</div>
              </div>
              <img className={styles.frameIcon3} alt="" src="/frame4@2x.png" />
            </div>
            <div className={styles.categoryList2}>
              <div className={styles.shirtsWrapper}>
                <div className={styles.shirts}>Shirts</div>
              </div>
              <img className={styles.frameIcon4} alt="" src="/frame4@2x.png" />
            </div>
            <div className={styles.categoryList3}>
              <div className={styles.hoodieWrapper}>
                <div className={styles.hoodie}>Hoodie</div>
              </div>
              <img className={styles.frameIcon5} alt="" src="/frame4@2x.png" />
            </div>
            <div className={styles.categoryList4}>
              <div className={styles.jeansWrapper}>
                <div className={styles.jeans}>Jeans</div>
              </div>
              <img className={styles.frameIcon6} alt="" src="/frame4@2x.png" />
            </div>
          </div>
          <div className={styles.filterToggles1}>
            <div className={styles.filterTogglesChild} />
          </div>
          <div className={styles.priceFilter}>
            <h3 className={styles.price}>Price</h3>
            <div className={styles.frameFrame}>
              <img
                className={styles.frameIcon7}
                alt=""
                src="/frame-12@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-6.svg"
            />
            <div className={styles.frameDiv}>
              <div className={styles.emptySelectionParent}>
                <div className={styles.emptySelection}>$50</div>
                <div className={styles.emptySelection1}>$200</div>
              </div>
            </div>
          </div>
          <div className={styles.filterToggles2}>
            <div className={styles.filterTogglesItem} />
          </div>
          <div className={styles.colorDropdownParent}>
            <div className={styles.colorDropdown}>
              <h3 className={styles.colors}>Colors</h3>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameIcon8}
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
            </div>
            <div className={styles.colorPalette}>
              <img
                className={styles.colorPaletteChild}
                loading="lazy"
                alt=""
                src="/group-8.svg"
              />
              <div className={styles.swatches} />
              <div className={styles.swatches1} />
              <div className={styles.swatches2} />
              <div className={styles.swatches3} />
              <img
                className={styles.colorPaletteItem}
                loading="lazy"
                alt=""
                src="/group-8-1.svg"
              />
              <div className={styles.swatches4} />
              <div className={styles.swatches5} />
              <div className={styles.swatches6} />
              <div className={styles.swatches7} />
            </div>
          </div>
          <div className={styles.filterToggles3}>
            <div className={styles.filterTogglesInner} />
          </div>
          <div className={styles.sizeFilter}>
            <div className={styles.sizeDropdown}>
              <div className={styles.sizeTitle}>
                <h3 className={styles.size}>Size</h3>
                <img
                  className={styles.frameIcon9}
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
              <div className={styles.sizeOptions}>
                <div className={styles.sizeValues}>
                  <div className={styles.xxSmall}>XX-Small</div>
                </div>
                <div className={styles.sizeValues1}>
                  <div className={styles.xSmall}>X-Small</div>
                </div>
                <div className={styles.sizeValues2}>
                  <div className={styles.small}>Small</div>
                </div>
                <div className={styles.sizeValues3}>
                  <div className={styles.medium}>Medium</div>
                </div>
                <div className={styles.sizeValues4}>
                  <div className={styles.large}>Large</div>
                </div>
                <div className={styles.sizeValues5}>
                  <div className={styles.xLarge}>X-Large</div>
                </div>
                <div className={styles.sizeValues6}>
                  <div className={styles.xxLarge}>XX-Large</div>
                </div>
                <div className={styles.sizeValues7}>
                  <div className={styles.xLarge1}>3X-Large</div>
                </div>
                <div className={styles.sizeValues8}>
                  <div className={styles.xLarge2}>4X-Large</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.filterToggles4}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.styleFilter}>
            <div className={styles.dressStyleOptions}>
              <div className={styles.dressStyle}>
                <h3 className={styles.dressStyle1}>Dress Style</h3>
                <img
                  className={styles.frameIcon10}
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
              <div className={styles.dressStyles}>
                <div className={styles.styleNames}>
                  <div className={styles.casual1}>Casual</div>
                  <img
                    className={styles.frameIcon11}
                    alt=""
                    src="/frame4@2x.png"
                  />
                </div>
                <div className={styles.styleNames1}>
                  <div className={styles.formal}>Formal</div>
                  <img
                    className={styles.frameIcon12}
                    alt=""
                    src="/frame4@2x.png"
                  />
                </div>
                <div className={styles.styleNames2}>
                  <div className={styles.party}>Party</div>
                  <img
                    className={styles.frameIcon13}
                    alt=""
                    src="/frame4@2x.png"
                  />
                </div>
                <div className={styles.styleNames3}>
                  <div className={styles.gym}>Gym</div>
                  <img
                    className={styles.frameIcon14}
                    alt=""
                    src="/frame4@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.filterButton}>
            <div className={styles.applyFilter}>Apply Filter</div>
          </div>
        </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.productListingParent}>
          <div className={styles.productListing}>
            <div className={styles.casualParent}>
              <h1 className={styles.casual2}>Casual</h1>
              <div className={styles.sort}>
                <div className={styles.productCount}>
                  <div className={styles.productCount1}>
                    <div className={styles.showing110Of}>
                      Showing 1-10 of 100 Products
                    </div>
                  </div>
                  <div className={styles.sortDropdownParent}>
                    <div className={styles.sortDropdown}>
                      <div className={styles.sortByMostContainer}>
                        <span>{`Sort by: `}</span>
                        <span className={styles.mostPopular}>Most Popular</span>
                      </div>
                    </div>
                    <img
                      className={styles.frameIcon15}
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productList1}>
              <div className={styles.productItems}>
                <img
                  className={styles.productContainersIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-33@2x.png"
                />
                <div className={styles.productDetails}>
                  <h3 className={styles.gradientGraphicTShirt}>
                    Gradient Graphic T-shirt
                  </h3>
                  <div className={styles.productRatings}>
                    <div className={styles.ratingStars}>
                      <img
                        className={styles.starsIcon}
                        loading="lazy"
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.starsIcon1}
                        loading="lazy"
                        alt=""
                        src="/star-2.svg"
                      />
                      <img
                        className={styles.starsIcon2}
                        alt=""
                        src="/star-3.svg"
                      />
                      <img
                        className={styles.ratingStarsChild}
                        alt=""
                        src="/star-5-1.svg"
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <span>3.5/</span>
                      <span className={styles.span}>5</span>
                    </div>
                  </div>
                  <b className={styles.productContainer}>$145</b>
                </div>
              </div>
              <div className={styles.productItems1}>
                <img
                  className={styles.productItemsChild}
                  loading="lazy"
                  alt=""
                  src="/frame-34@2x.png"
                />
                <div className={styles.poloWithTippingDetailsParent}>
                  <h3 className={styles.poloWithTipping}>
                    Polo with Tipping Details
                  </h3>
                  <div className={styles.frameGroup}>
                    <div className={styles.starParent}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="/star-2.svg"
                      />
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-3.svg"
                      />
                      <img
                        className={styles.frameChild1}
                        alt=""
                        src="/star-4.svg"
                      />
                      <img
                        className={styles.frameChild2}
                        alt=""
                        src="/star-5.svg"
                      />
                    </div>
                    <div className={styles.div}>
                      <span>4.5/</span>
                      <span className={styles.span1}>5</span>
                    </div>
                  </div>
                  <b className={styles.b}>$180</b>
                </div>
              </div>
              <div className={styles.productsRow}>
                <img
                  className={styles.productsRowChild}
                  loading="lazy"
                  alt=""
                  src="/frame-38@2x.png"
                />
                <div className={styles.blackStripedTShirtParent}>
                  <h3 className={styles.blackStripedTShirt}>
                    Black Striped T-shirt
                  </h3>
                  <div className={styles.frameParent1}>
                    <div className={styles.starGroup}>
                      <img
                        className={styles.frameChild3}
                        alt=""
                        src="/star-1.svg"
                      />
                      <img
                        className={styles.frameChild4}
                        alt=""
                        src="/star-2.svg"
                      />
                      <img
                        className={styles.frameChild5}
                        alt=""
                        src="/star-3.svg"
                      />
                      <img
                        className={styles.frameChild6}
                        alt=""
                        src="/star-4.svg"
                      />
                      <img
                        className={styles.frameChild7}
                        alt=""
                        src="/star-5-4.svg"
                      />
                    </div>
                    <div className={styles.div1}>
                      <span>5.0/</span>
                      <span className={styles.span2}>5</span>
                    </div>
                  </div>
                  <div className={styles.imageContainerParent}>
                    <b className={styles.imageContainer}>$120</b>
                    <b className={styles.productName}>$150</b>
                    <div className={styles.productRating}>
                      <div className={styles.ratingStars1}>
                        <div className={styles.ratingValue}>-30%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productDetails1}>
              <div className={styles.productImage}>
                <img
                  className={styles.image8Icon}
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
              <div className={styles.skinnyFitJeansParent}>
                <h3 className={styles.skinnyFitJeansContainer}>
                  S<span className={styles.kinny}>KINNY</span> F
                  <span className={styles.it}>IT</span> J
                  <span className={styles.eans}>EANS</span>
                </h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingRow}>
                    <img
                      className={styles.ratingStarsIcon}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.ratingStarsIcon1}
                      loading="lazy"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className={styles.ratingStarsIcon2}
                      alt=""
                      src="/star-3.svg"
                    />
                    <img
                      className={styles.ratingRowChild}
                      alt=""
                      src="/star-5-1.svg"
                    />
                  </div>
                  <div className={styles.emptyRating}>
                    <span>3.5/</span>
                    <span className={styles.span3}>5</span>
                  </div>
                </div>
                <div className={styles.ratingSeparatorContainer}>
                  <b className={styles.emptyRating1}>$240</b>
                  <b className={styles.emptyRating2}>$260</b>
                  <div className={styles.ratingPlaceholder}>
                    <div className={styles.ratingRow1}>
                      <div className={styles.emptyRating3}>-20%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productDetails2}>
              <img
                className={styles.productDetailsChild}
                loading="lazy"
                alt=""
                src="/frame-341@2x.png"
              />
              <div className={styles.checkeredShirtParent}>
                <h3 className={styles.checkeredShirt}>
                  <span>
                    C<span className={styles.heckered}>HECKERED</span> S
                    <span className={styles.hirt}>HIRT</span>
                  </span>
                </h3>
                <div className={styles.frameParent2}>
                  <div className={styles.starContainer}>
                    <img
                      className={styles.frameChild8}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.frameChild9}
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className={styles.frameChild10}
                      alt=""
                      src="/star-3.svg"
                    />
                    <img
                      className={styles.frameChild11}
                      alt=""
                      src="/star-4.svg"
                    />
                    <img
                      className={styles.frameChild12}
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                  <div className={styles.div2}>
                    <span>4.5/</span>
                    <span className={styles.span4}>5</span>
                  </div>
                </div>
                <b className={styles.b1}>$180</b>
              </div>
            </div>
            <ProductDetails
              frame73="/frame-381@2x.png"
              lEEVE="LEEVE"
              sHIRT="SHIRT"
              star5="/star-5.svg"
              prop="4.5/"
              prop1="$130"
              prop2="$160"
              prop3="-30%"
            />
            <ProductDetails
              frame73="/frame-32-1@2x.png"
              lEEVE="ERTICAL"
              sHIRT="HIRT"
              star5="/star-5-4.svg"
              prop="5.0/"
              prop1="$212"
              prop2="$232"
              prop3="-20%"
            />
            <div className={styles.productDetails3}>
              <img
                className={styles.productDetailsItem}
                loading="lazy"
                alt=""
                src="/frame-331@2x.png"
              />
              <div className={styles.courageGraphicTShirtParent}>
                <h3 className={styles.courageGraphicTShirtContainer}>
                  C<span className={styles.ourage}>OURAGE</span> G
                  <span className={styles.raphic}>RAPHIC</span> T-
                  <span className={styles.shirt}>SHIRT</span>
                </h3>
                <div className={styles.frameParent3}>
                  <div className={styles.starParent1}>
                    <img
                      className={styles.frameChild13}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.frameChild14}
                      loading="lazy"
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className={styles.frameChild15}
                      loading="lazy"
                      alt=""
                      src="/star-3.svg"
                    />
                    <img
                      className={styles.frameChild16}
                      alt=""
                      src="/star-4.svg"
                    />
                  </div>
                  <div className={styles.div3}>
                    <span>4.0/</span>
                    <span className={styles.span5}>5</span>
                  </div>
                </div>
                <b className={styles.b2}>$145</b>
              </div>
            </div>
            <div className={styles.productDetails4}>
              <img
                className={styles.productDetailsInner}
                loading="lazy"
                alt=""
                src="/frame-34-1@2x.png"
              />
              <div className={styles.looseFitBermudaShortsParent}>
                <h3 className={styles.looseFitBermudaContainer}>
                  <span>
                    L<span className={styles.oose}>OOSE</span> F
                    <span className={styles.it1}>IT</span> B
                    <span className={styles.ermuda}>ERMUDA</span> S
                    <span className={styles.horts}>HORTS</span>
                  </span>
                </h3>
                <div className={styles.frameParent4}>
                  <div className={styles.starParent2}>
                    <img
                      className={styles.frameChild17}
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.frameChild18}
                      alt=""
                      src="/star-2.svg"
                    />
                    <img
                      className={styles.frameChild19}
                      alt=""
                      src="/star-3.svg"
                    />
                  </div>
                  <div className={styles.div4}>
                    <span>3.0/</span>
                    <span className={styles.span6}>5</span>
                  </div>
                </div>
                <b className={styles.b3}>$80</b>
              </div>
            </div>
          </div>
          <div className={styles.pagination}>
            <div className={styles.separator} />
            <div className={styles.paginationControls}>
              <div className={styles.previousButtonContainer}>
                <SizesmHierarchySecondaryG
                  circle="/arrowleft.svg"
                  text="Previous"
                />
              </div>
              <div className={styles.pageNumberList}>
                <StateHoveractiveShapeSqua
                  number="1"
                  stateHoveractiveShapeSquaBackgroundColor="rgba(0, 0, 0, 0.06)"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="1"
                />
                <StateHoveractiveShapeSqua
                  number="2"
                  stateHoveractiveShapeSquaBackgroundColor="unset"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="1"
                />
                <StateHoveractiveShapeSqua
                  number="3"
                  stateHoveractiveShapeSquaBackgroundColor="unset"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="unset"
                />
                <StateHoveractiveShapeSqua
                  number="..."
                  stateHoveractiveShapeSquaBackgroundColor="unset"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="unset"
                />
                <StateHoveractiveShapeSqua
                  number="8"
                  stateHoveractiveShapeSquaBackgroundColor="unset"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="1"
                />
                <StateHoveractiveShapeSqua
                  number="9"
                  stateHoveractiveShapeSquaBackgroundColor="unset"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="1"
                />
                <StateHoveractiveShapeSqua
                  number="10"
                  stateHoveractiveShapeSquaBackgroundColor="unset"
                  stateHoveractiveShapeSquaDisplay="flex"
                  stateHoveractiveShapeSquaFlexDirection="row"
                  stateHoveractiveShapeSquaFlex="1"
                />
              </div>
              <div className={styles.nextButtonContainer}>
                <SizesmHierarchySecondaryG1
                  text="Next"
                  circle="/arrowright.svg"
                  sizesmHierarchySecondaryGAlignSelf="stretch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbsAndFilters.propTypes = {
  className: PropTypes.string,
};

export default BreadcrumbsAndFilters;
