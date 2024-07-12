'use client'

import i18next from "../../i18n";
import { useEffect, useState } from "react";
import Link from "next/link";
import '../../app/categories/Categories.sass'
// if (filter.Type != null){
//   data =  data.filter(item => 
//     item.type == filter.Type
// )
// }
// if (filter.Color != null){
//   data =  data.filter(item => 
//     item.color == filter.Color
// )
// }

 const ProductShow = ({params, data}) => {

    if (params.id != "" && params.id != null && params.id != undefined && params.id[0] != "all") {
        let searchParam = params.id[0].toLowerCase();
        data = data.filter(item =>
            item.name.toLowerCase().includes(searchParam) &&
            item.description.toLowerCase().includes(searchParam)
        )
    }
    const [selectedSort, setSelectedSort] = useState('Products');

    switch (selectedSort) {
        case 'Popular':
            data = data.filter(item => item.topSelling === true);
            break;
        case 'Highest Rating':
            data.sort((a, b) => b.rating - a.rating);
            break;
        case 'Newest':
            data = data.filter(item => item.newArrivals === true);
            break;
        default:
            break;
    }
   ;

   
    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
      };

      useEffect(() => {
    }, []);
    
    return (
        <div>
            <div className='d-flex justify-content-between flex-wrap'>
                <h4 className="pageTitle">{selectedSort}</h4>
                <div className="mb-3 d-flex flex-wrap align-items-center"><span className="d-inline-block me-2 sortByTitle">{i18next.t('showingproducts')}</span>
                    <div className="dropdown bootstrap-select dropup">
                        <select className="selectpicker btn-selectpicker border-0" 
                        name="sort" id="form_sort" 
                        value={selectedSort}
                        onChange={handleSortChange} tabIndex="null">
                            <option value="Products">{i18next.t('default')}</option>
                            <option value="Popular">{i18next.t('popularity')}</option>
                            <option value="Highest Rating">{i18next.t('rating')}</option>
                            <option value="Newest">{i18next.t('newestfirst')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='categoriesContainer'>
                {data.map(item => (
                    <Link key={item.id} href={`/productdetail/${item.id}`}>
                        <div className="boxPrd">
                            <div className="mb-6">
                                <div className="imgContainer">
                                    <img src={item.image} alt="" className="w-100" />
                                </div>
                                <div>
                                    <h2 className="mt-3 fs-6 productTitle">{item.name}</h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </small>
                                        <span className="small ratingPrd">{item.rating}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="price">${item.price}</span>
                                        <span className="discountPrice">$24</span>
                                        <span className="badgePrd badge rounded-pill">-45%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default ProductShow