"use client"
import { ViewAllButton } from '@/styles/ProductStyle'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import SingleProduct from './SingleProduct';
import ProductComment from './ProductComment';

const LoadMoreButton = ({ data }) => {
    const [click, setClick] = useState(false);
    const t = useTranslations();
    return (
        <>

            {click ? (data.comments.slice(6).map((comment) => (
                (
                    <ProductComment 
                        key={comment.id}
                        data={comment} />
                )))) : ''}
            <div className="col-12 d-flex justify-content-center">
                {click ? (<ViewAllButton className='mt-5' onClick={() => { setClick(false) }}>
                    {t('loadLessReviews')}
                </ViewAllButton>) : (<ViewAllButton className='mt-5' onClick={() => { setClick(true) }}>
                    {t('loadMoreReviews')}
                </ViewAllButton>)}
            </div>

        </>
    )
}

export default LoadMoreButton