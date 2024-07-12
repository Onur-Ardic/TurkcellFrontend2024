import { useTranslations } from 'next-intl'
import React from 'react'
import Reviews from './Reviews';
import Faq from './Faq';

const ProductTabs = ({data}) => {
    const t = useTranslations();
    return (
        <div className='mt-5'>
            <ul className="nav nav-tabs border-bottom" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="productDetails-tab" data-bs-toggle="tab"
                        data-bs-target="#productDetails" type="button"
                        role="tab" aria-controls="productDetails" aria-selected="false"
                    >
                        {t('productDetails')}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="ratingReviews-tab" 
                    data-bs-toggle="tab" data-bs-target="#ratingReviews" 
                    type="button" role="tab" aria-controls="ratingReviews" 
                    aria-selected="true"
                    >
                    {t('ratingReviews')}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="faqs-tab" 
                    data-bs-toggle="tab" data-bs-target="#faqs" 
                    type="button" role="tab" aria-controls="faqs" 
                    aria-selected="false"
                    >
                    {t('faqs')}
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade " id="productDetails" 
                role="tabpanel" aria-labelledby="productDetails-tab">
                    <p>{t('productDetail')}</p>
                </div>
                <div className="tab-pane fade show active" id="ratingReviews" 
                role="tabpanel" aria-labelledby="ratingReviews-tab">
                    <Reviews data={data} />
                </div>
                <div className="tab-pane fade" id="faqs" 
                role="tabpanel" aria-labelledby="faqs-tab">
                    <Faq />
                </div>
            </div>
        </div>
    )
}

export default ProductTabs