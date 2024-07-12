import Cartleft from '@/components/Cart/CartLeft'
import CartRight from '@/components/Cart/CartRight'
import { CartTitle } from '@/styles/CartStyle'
import { StyledLink } from '@/styles/ComponentStyle'
import { Container } from '@/styles/LayoutStyle'
import { useTranslations } from 'next-intl'
import React from 'react'
const page = () => {
const t = useTranslations();
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-3 mb-2">
          <li className="breadcrumb-item"><StyledLink href="/">{t('home')}</StyledLink></li>
          <li className="breadcrumb-item"><StyledLink href="/cart">{t('cart')}</StyledLink></li>
        </ol>
      </nav>
      <div className="row py-2">
        <div className="col-12">
          <CartTitle>
            {t('yourCart')}
          </CartTitle>
        </div>
        <div className="col-12 col-md-7 mb-3">
          <Cartleft />
        </div>
        <div className="col-12 col-md-5">
          <CartRight />
        </div>
      </div>
    </Container>
  )
}

export default page