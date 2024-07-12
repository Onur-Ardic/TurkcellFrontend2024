import Image from "next/image";
import "../components/components.css";
import homepageImage from "../assets/images/homapage.jpeg";
import versace from "../assets/images/versace.png";
import pantolon from "../assets/images/pantolon.png";
import shirt from "../assets/images/shirt.png";
import tshirt from "../assets/images/tshirt.png";
import tshirt2 from "../assets/images/tshirt2.png";
import zara from "../assets/images/zara.png";
import gucci from "../assets/images/gucci.png";
import prada from "../assets/images/prada.png";
import calvinKlein from "../assets/images/calvinKlein.png";
import casual from "../assets/images/casual.png";
import formal from "../assets/images/formal.png";
import gym from "../assets/images/gym.png";
import party from "../assets/images/party.png";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import CommentCard from "@/components/CommentCard";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className={styles.title}>
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className={styles.subtitle}>
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
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
                    <p className={styles.menu_subtitle}>
                      High-Quality Products
                    </p>
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
        </div>
      </div>
      <div className={styles.logo_menu}>
        <Image src={versace} className={styles.versace} />
        <Image src={zara} className={styles.versace} />
        <Image src={gucci} className={styles.versace} />
        <Image src={prada} className={styles.versace} />
        <Image src={calvinKlein} className={styles.versace} />
      </div>
      <div id="products" className="container">
        <div className="row">
          <h1 className={styles.content_title}>NEW ARRIVALS</h1>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ProductCard src={pantolon} />
          </div>
          <div className="col-lg-3">
            <ProductCard src={shirt} />
          </div>
          <div className="col-lg-3">
            <ProductCard src={tshirt} />
          </div>
          <div className="col-lg-3">
            <ProductCard src={tshirt2} />
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
            <ProductCard src={tshirt} />
          </div>
          <div className="col-lg-3">
            <ProductCard src={tshirt2} />
          </div>
          <div className="col-lg-3">
            <ProductCard src={pantolon} />
          </div>
          <div className="col-lg-3">
            <ProductCard src={shirt} />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button className={styles.view_btn}>View All</button>
        </div>
      </div>
      <div id="browse" className="container ">
        <div className={styles.browse}>
          <div className="row">
            <h1 className={styles.content_title}>BROWSE BY DRESS STYLE</h1>
          </div>
          <div className={styles.browse_content}>
            <div className={styles.browse_row}>
              <div className={styles.casual}>
                <p className={styles.browse_text}>Casual</p>
                <Image src={casual} className={styles.casual_img} />
              </div>
              <div className={styles.formal}>
                <p className={styles.browse_text}>Formal</p>
                <Image src={formal} className={styles.formal_img} />
              </div>
            </div>
            <div className={styles.browse_row}>
              <div className={styles.party}>
                <p className={styles.browse_text}>Party</p>
                <Image src={party} className={styles.party_img} />
              </div>
              <div className={styles.gym}>
                <p className={styles.browse_text}>Gym</p>
                <Image src={gym} className={styles.gym_img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="customers" className="container">
        <div className="row">
          <h1 className={styles.comment_title}>OUR HAPPY CUSTOMERS</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <CommentCard />
          </div>
          <div className="col-lg-4">
            <CommentCard />
          </div>
          <div className="col-lg-4">
            <CommentCard />
          </div>
        </div>
      </div>
    </>
  );
}
