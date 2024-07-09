import Image from "next/image";
import "../components/components.css";
import homepageImage from "../assets/images/homapage.jpeg";
import versace from "../assets/images/versace.png";
import zara from "../assets/images/zara.png";
import gucci from "../assets/images/gucci.png";
import prada from "../assets/images/prada.png";
import calvinKlein from "../assets/images/calvinKlein.png";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <h1 className={styles.title}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className={styles.subtitle}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className={styles.shop_btn}>Shop Now</button>
            <div className={styles.info_menu}>
              <div>
                <h2 className={styles.menu_title}>200+</h2>
                <p className={styles.menu_subtitle}>International Brands</p>
              </div>
              <div className={styles.line}></div>

              <div>
                <h2 className={styles.menu_title}>2,000+</h2>
                <p className={styles.menu_subtitle}>High-Quality Products</p>
              </div>
              <div className={styles.line}></div>

              <div>
                <h2 className={styles.menu_title}>30,000+</h2>
                <p className={styles.menu_subtitle}>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image className={styles.homepage_img} src={homepageImage} />
          </div>
        </div>
      </div>
      <div className={styles.logo_menu}>
        <Image src={versace} className={styles.versace} />
        <Image src={zara} className={styles.versace} />
        <Image src={gucci} className={styles.versace} />
        <Image src={prada} className={styles.versace} />
        <Image src={calvinKlein} className={styles.versace} />
      </div>
      <div className="container">
        <div className="row">
          <h1 className={styles.content_title}>NEW ARRIVALS</h1>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button className={styles.view_btn}>View All</button>
        </div>
        <hr className={styles.vertical_line} />
        <div className="row">
          <h1 className={styles.content_title}>TOP SELLING</h1>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
          <div className="col-lg-3">
            <ProductCard />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button className={styles.view_btn}>View All</button>
        </div>
      </div>
    </>
  );
}
