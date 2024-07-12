"use client"
import { getPromoCodes } from '@/api/server';
import { applyPromoCode, setPromoCodes } from '@/lib/features/cart/cartSlice';
import {
    ApplyButton,
    CartContainer,

    OrderPrice,
    OrderPriceText,
    OrderTitle,
    OrderTotalPrice,
    PromoContainer,
    PromoIconContainer,
    PromoInput
} from '@/styles/CartStyle'
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CartRight = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItem);
    const promoCodes = useSelector(state => state.cart.promoCodes);

    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [subTotalPrice, setSubTotalPrice] = useState('')
    const [fee, setFee] = useState(false);
    const [discountedItem, setDiscountedItem] = useState(false);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        setLoading(true);
        const promoCodeHandler = async () => {
            const data = await getPromoCodes();
            dispatch(setPromoCodes(data));
        };
        promoCodeHandler();
        setLoading(false);
    }, [])

    const calculateTotalPrice = (cartItems = [], promoCode = null, promoCodes = []) => {
        let subTotalPrice = 0;
        let totalPrice = 0;
        setDiscountedItem(cartItems.some(item => item.discountPercentage > 0));
        cartItems.forEach(item => {
            subTotalPrice += item.price * item.quantity;
            setSubTotalPrice(subTotalPrice)
        });

        cartItems.forEach(item => {
            setDiscount(item.discountPercentage)
            const discountedPrice = Math.floor(item.price - (item.discountPercentage * item.price / 100))
            totalPrice += discountedPrice * item.quantity;
        });

        if (promoCode) {
            if (promoCode === 'FIRSTPURCHASE') {
                totalPrice *= 0.8;
            } else {
                const promoCodeData = promoCodes.find((code) => code.code === promoCode);
                if (promoCodeData) {
                    console.log(Number(promoCodeData.discount))
                    totalPrice = (totalPrice) - (Number(promoCodeData.discount));
                    toast.success(t('promoSuccess'));
                } else {
                    toast.info(t('invalidCode'))
                }
            }
        }
        if (totalPrice <= 100) {
            totalPrice += 15;
            setFee(true)
        }
        return totalPrice;
    };

    useEffect(() => {
        if (!loading) {
            const totalPrice = calculateTotalPrice(cartItems, promoCode, promoCodes);
            setTotalPrice(totalPrice)
        }
    }, [])
    useEffect(() => {
        const totalPrice = calculateTotalPrice(cartItems, promoCode, promoCodes);
        setTotalPrice(totalPrice)
    }, [cartItems])

    const handleApplyPromoCode = (e, cartItems, promoCode, promoCodes) => {
        e.preventDefault();
        const totalPrice = calculateTotalPrice(cartItems, promoCode, promoCodes);
        setTotalPrice(totalPrice);
    };

    return (
        <>
            <CartContainer>
                <div className="row m-0 p-0">
                    <div className="col-12 border-bottom">
                        <OrderTitle>
                            {t('orderSummary')}
                        </OrderTitle>
                        {
                            subTotalPrice > 0 &&
                            <div className="d-flex justify-content-between">
                                <OrderPriceText>
                                    {t('subTotal')}
                                </OrderPriceText>
                                <OrderPrice>
                                    ${subTotalPrice}
                                </OrderPrice>
                            </div>
                        }
                        {
                            discountedItem === true ? (

                                <div className="d-flex justify-content-between">
                                    <OrderPriceText>
                                        {t('discount')} {'('}-{discount}%{')'}
                                    </OrderPriceText>
                                    <OrderPrice>
                                        -${subTotalPrice - totalPrice}
                                    </OrderPrice>
                                </div>) : ''
                        }
                        {
                            fee === true && subTotalPrice > 0 ? (

                                <div className="d-flex justify-content-between">
                                    <OrderPriceText>
                                        {t('deliveryFee')}
                                    </OrderPriceText>
                                    <OrderPrice>
                                        {'$ 15'}
                                    </OrderPrice>
                                </div>) : ''
                        }
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                {
                                    subTotalPrice > 0 &&
                                    <>
                                        <OrderPriceText className='m-0'>
                                            {t('total')}
                                        </OrderPriceText>
                                        <OrderTotalPrice className='m-0'>
                                            ${totalPrice.toFixed(2)}
                                        </OrderTotalPrice>
                                    </>
                                }
                            </div>
                            <form >
                                <div className="d-flex justify-content-between gap-3 align-items-center">
                                    <PromoContainer>
                                        <PromoIconContainer>
                                            <FiTag />
                                        </PromoIconContainer>
                                        <PromoInput
                                            placeholder={t('promoCode')}
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                        />
                                    </PromoContainer>
                                    <ApplyButton type='button' onClick={(e) => { handleApplyPromoCode(e, cartItems, promoCode, promoCodes) }}>{t('applyButton')}</ApplyButton>
                                </div>
                            </form>
                            <ApplyButton >{t('checkoutButton')} <FaArrowRight /> </ApplyButton>
                        </div>
                    </div>
                </div>
            </CartContainer>
        </>
    )
}

export default CartRight