import Image from "next/image"
import versace from "../assets/brands/versace.png"
import zara from "../assets/brands/zara.png"
import gucci from "../assets/brands/gucci.png"
import prada from "../assets/brands/prada.png"
import calvinKlein from "../assets/brands/calvin-klein.png"

const Brands = () => {
    return (
        <div className="brands-container">
            <div className="container d-flex flex-wrap justify-content-center justify-content-lg-between">
                <Image className="m-2 m-lg-0 brand-image img-fluid" src={versace} />
                <Image className="m-2 m-lg-0 brand-image img-fluid" src={zara} />
                <Image className="m-2 m-lg-0 brand-image img-fluid" src={gucci} />
                <Image className="m-2 m-lg-0 brand-image img-fluid" src={prada} />
                <Image className="m-2 m-lg-0 brand-image img-fluid" src={calvinKlein} />
            </div>
        </div>
    )
}

export default Brands