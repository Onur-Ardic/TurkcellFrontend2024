import Image from "next/image"
import casual from "../assets/dressStyles/1.png"
import formal from "../assets/dressStyles/2.png"
import party from "../assets/dressStyles/3.png"
import gym from "../assets/dressStyles/4.png"

const DressStyles = () => {
    return (
        <div className="container">
            <div className="dressStyles-container p-5">
                <h2 className="text-center pt-3 mt-2">BROWSE BY DRESS STYLE</h2>
                <div className="row pb-2 border border-0">
                    <Image src={casual} className="img-fluid col-12 col-md-5 mb-3 image" />
                    <Image src={formal} className="img-fluid col-12 col-md-7 mb-3 image" />
                </div>
                <div className="row pb-2 border border-0">
                    <Image src={party} className="img-fluid col-12 col-md-7 mb-3 image" />
                    <Image src={gym} className="img-fluid col-12 col-md-5 mb-3 image" />
                </div>
            </div>
        </div>
    )
}

export default DressStyles