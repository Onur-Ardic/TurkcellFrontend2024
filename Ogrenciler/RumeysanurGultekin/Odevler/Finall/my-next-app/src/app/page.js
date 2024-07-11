import Image from "next/image";
import BrandSlogan from "@/components/BrandSlogan/BrandSlogan";
import Newarrivals from "@/components/Newarrivals/Newarrivals";
import "../../css/main.css";
import Browse1 from "../../public/browse01.png";
import Browse2 from "../../public/browse2.png";
import Browse3 from "../../public/browse3.png";
import Browse4 from "../../public/Browse4.png";
import Topselling from "@/components/Newarrivals/Topsell";
import Brand from "@/components/Brands/Brand";

export default async function Home() {
  return (
    <div>
      <BrandSlogan />
      <Brand />
      <Newarrivals />
      <Topselling />
      <div>
        <div className="browse">
          <h2 className="browsetext text-center mb-5">BROWSE BY DRESS STYLE</h2>
          <div className="tablebrowse">
            <div className="row gap-4 mb-4">
              <div className="bg-white col-lg-4 ">
                <p>Casual</p>
                <Image src={Browse1} width={295} height={298} alt="browse" />
              </div>
              <div className="bg-white col-lg-7">
                <p>Formal</p>
                <Image src={Browse2} width={295} height={298} alt="browse" />
              </div>
            </div>
            <div className="row gap-4">
              <div className="bg-white col-lg-7">
                <p>Party</p>
                <Image src={Browse3} width={295} height={298} alt="browse" />
              </div>
              <div className="bg-white col-lg-4">
                <p>Gym</p>
                <Image src={Browse4} width={295} height={298} alt="browse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
