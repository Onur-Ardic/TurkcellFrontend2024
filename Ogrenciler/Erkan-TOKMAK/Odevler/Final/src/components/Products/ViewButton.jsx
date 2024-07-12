"use client"
import { ViewAllButton } from '@/styles/ProductStyle'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import SingleProduct from './SingleProduct';

const ViewButton = ({ data }) => {
    const [click, setClick] = useState(false);
    const t = useTranslations();
    return (
        <>

            {click ? (data.slice(4).map((product) => (
                (
                    <div className="col-6 col-md-3 py-3">

                    <SingleProduct
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        discountPercentage={product.discountPercentage} />
                    </div>
                )))) : ''}
            <div className="col-12 d-flex justify-content-center">
                {click ? (<ViewAllButton className='mt-5' onClick={() => { setClick(false) }}>
                    {t('viewLess')}
                </ViewAllButton>) : (<ViewAllButton className='mt-5' onClick={() => { setClick(true) }}>
                    {t('viewAll')}
                </ViewAllButton>)}
            </div>

        </>
    )
}

export default ViewButton