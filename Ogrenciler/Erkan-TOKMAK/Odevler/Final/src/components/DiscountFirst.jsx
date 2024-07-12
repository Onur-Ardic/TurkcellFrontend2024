
import React from 'react'
import { SDiscountButton, SDiscountFirst, StyledLink } from '../styles/ComponentStyle'
import { Container } from '../styles/LayoutStyle'
import { useTranslations } from 'next-intl';
const DiscountFirst = () => {
    const t = useTranslations();

    return (
        <>
            <SDiscountFirst>
                <Container>
                    <div className="d-flex h-100 p-0 m-0">
                        <p className='m-0 w-100 h-100'>
                            {t('discountFirst')}
                            <StyledLink href="/register" className='text-decoration-none'>
                                <span className='text-decoration-underline ms-1 text-white'> {t('discountSecond')}</span>
                            </StyledLink>
                        </p>
                        <SDiscountButton>X</SDiscountButton>
                    </div>
                </Container>
            </SDiscountFirst>
        </>
    )
}

export default DiscountFirst