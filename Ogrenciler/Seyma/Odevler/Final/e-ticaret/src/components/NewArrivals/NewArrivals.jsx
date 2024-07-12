import Link from "next/link";
import i18next from "../../i18n";
import ViewBtn from "../ViewBtn/ViewBtn";
import "./topArrivals.sass"
import { getData } from '@/api';

export default async function page() {
    const data = await getData('http://localhost:3000/products')
    const newarrivals =  data.filter(item => item.newArrivals === true).slice(0, 4)

    return (
        <div className="container-xxl">
            <h1 className="text-center newArvTitle py-5">{i18next.t('newArrivals')}</h1>
            <div className="row row-cols-xl-4 row-cols-lg-3 g-4">
            {newarrivals.map(item => (
            <div className="col" key={item.id}>
            <Link href={`/productdetail/${item.id}`}>
                    <div className="mb-6">
                            <div className="imgContainer">
                               <img src={item.image} className="w-100" alt=""/>
                        </div>
                        <div>
                            <h2 className="mt-3 fs-6">{item.name}</h2>
                            <div className="d-flex align-items-center">
                                <span className="price">${item.price}</span>
                                <span className="discountPrice">$24</span> 
                                <span className="badge rounded-pill">-45%</span>
                            </div>
                            <div className="text-warning">
                                <small>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                                </small>
                                <span className="ratingArv text-muted small">{item.rating}</span>
                            </div>
                        </div>
                    </div>   
                    </Link>
                </div>))}
            </div>
            <div className="d-flex justify-content-center">
            <ViewBtn ></ViewBtn>
            </div>
        </div>
    )
}

