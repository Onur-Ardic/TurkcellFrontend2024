import styles from "./page.module.scss";
import Request from "@/app/request";
import CommentCard from "@/components/commentCard/CommentCard";
import ProductCard from "@/components/productCard/ProductCard";
import Image from "next/image";

export default async function Home() {
  const products = await Request.get(
    "http://localhost:3000/products?_start=0&_end=8"
  );

  const comments = await Request.get(
    "http://localhost:3000/comments?_start=0&_end=3"
  );

  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>
              FIND CLOTHES
              <br />
              THAT MATCHES YOUR STYLE
            </h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed
              <br />
              to bring out your individuality and cater to your sense of style.
            </p>
            <button className={styles.heroButton}>Shop Now</button>
            <div className="d-flex justify-content-between pt-4">
              <div>
                <h1 className="fw-bold">200+</h1>
                <p>International Brands</p>
              </div>
              <div>
                <h1 className="fw-bold">2,000+</h1>
                <p>High-Quality Products</p>
              </div>
              <div>
                <h1 className="fw-bold">30,000+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <Image
            className="img-fluid"
            src="/hero.png"
            alt="Hero"
            width="720"
            height="663"
          />
        </section>
        <section className={styles.trademarks}>
          <Image src="/versace.png" alt="Versace" width="166" height="33" />
          <Image src="/zara.png" alt="Zara" width="91" height="38" />
          <Image src="/gucci.png" alt="Gucci" width="156" height="36" />
          <Image src="/prada.png" alt="Prada" width="194" height="32" />
          <Image
            src="/calvinklein.png"
            alt="Calvin Klein"
            width="207"
            height="33"
          />
        </section>
        <section className="new-arrivals">
          <h1 className={styles.heading}>NEW ARRIVALS</h1>
          <div className="d-flex justify-content-between flex-wrap">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="text-center">
            <button className="fw-medium">View All</button>
          </div>
        </section>
        <section className="top-selling">
          <h1 className={styles.heading}>TOP SELLING</h1>
          <div className="d-flex justify-content-between flex-wrap">
            {products.slice(4, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="text-center">
            <button className="fw-medium">View All</button>
          </div>
        </section>
        <section className={styles.browse}>
          <h1 className={styles.heading}>BROWSE BY DRESS STYLE</h1>
          <div className="dress-style-images d-flex justify-content-evenly flex-wrap gap-3">
            <Image src="/casual.png" alt="Casual" width="407" height="289" />
            <Image src="/formal.png" alt="Formal" width="684" height="289" />
            <Image src="/party.png" alt="Party" width="684" height="289" />
            <Image src="/gym.png" alt="Gym" width="407" height="289" />
          </div>
        </section>
        <section className="happy-customers">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className={styles.commentsTitle}>OUR HAPPY CUSTOMERS</h1>
            <div className="arrows d-flex gap-3">
              <Image
                src="/arrow-down-bold2.png"
                alt="Left Arrow"
                width="24"
                height="24"
              />
              <Image
                src="/arrow-down-bold.png"
                alt="Right Arrow"
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
            {comments.slice(0, 3).map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
