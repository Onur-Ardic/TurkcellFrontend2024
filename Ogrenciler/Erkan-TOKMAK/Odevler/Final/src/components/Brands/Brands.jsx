import { BrandsSection, ImageWrapper } from '@/styles/BrandStyle'
import { Container } from '@/styles/LayoutStyle'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
    return (
        <BrandsSection>
            <Container>
                <div className='row justify-content-between flex-wrap'>
                    <div className='col-4 col-md-2'>
                        <ImageWrapper className='position-relative'>
                            <Image src="/assets/logos/versace.png" alt="versace-logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                        </ImageWrapper>
                    </div>
                    <div className='col-4 col-md-2'>
                    <ImageWrapper className='position-relative'>
                        <Image src="/assets/logos/zara.png" alt="versace-logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                    </ImageWrapper>
                    </div>
                    <div className='col-4 col-md-2'>
                    <ImageWrapper className='position-relative'>
                        <Image src="/assets/logos/gucci.png" alt="versace-logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                    </ImageWrapper>
                    </div>
                    <div className='col-6 col-md-2'>
                    <ImageWrapper className='position-relative'>
                        <Image src="/assets/logos/prada.png" alt="versace-logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                    </ImageWrapper>
                    </div>
                    <div className='col-6 col-md-2'>
                    <ImageWrapper className='position-relative'>
                        <Image src="/assets/logos/calvin-clein.png" alt="versace-logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-contain' />
                    </ImageWrapper>
                    </div>
                </div>
            </Container>
        </BrandsSection>
    )
}

export default Brands