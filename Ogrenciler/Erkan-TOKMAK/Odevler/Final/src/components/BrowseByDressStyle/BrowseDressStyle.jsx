import { BrowseDressImageWrapper, BrowseDressSection, BrowseDressTitle, BrowseDressWrapper, ImageBox } from '@/styles/BrowseDressStyle'
import { SectionTitle, StyledLink } from '@/styles/ComponentStyle'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const BrowseDressStyle = () => {
    const t = useTranslations();
    return (
        <>
            <BrowseDressSection className='mt-5' id="dressByStyle">
                <div className="row py-5">
                    <div className="col-12">
                        <SectionTitle>
                            {t('browseByDressStyle')}
                        </SectionTitle>
                    </div>

                </div>
                <BrowseDressWrapper>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                            <StyledLink href="/shop?category=casual">
                                <ImageBox>
                                    <BrowseDressImageWrapper>
                                        <Image src="/assets/banners/casual.png" alt="casual-dressstyle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-cover rounded-5' />
                                        <BrowseDressTitle className='position-absolute mt-3 ms-3'>
                                            {t('casual')}
                                        </BrowseDressTitle>
                                    </BrowseDressImageWrapper>
                                </ImageBox>
                            </StyledLink>
                        </div>
                        <div className="col-12 col-md-8 mb-3">
                            <StyledLink href="/shop?category=formal">
                                <ImageBox>
                                    <BrowseDressImageWrapper>
                                        <Image src="/assets/banners/formal.png" alt="formal-dressstyle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-cover rounded-5' />
                                        <BrowseDressTitle className='position-absolute mt-3 ms-3'>
                                            {t('formal')}
                                        </BrowseDressTitle>
                                    </BrowseDressImageWrapper>
                                </ImageBox>
                            </StyledLink>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 col-md-8 mb-3">
                            <StyledLink href="/shop?category=party">
                                <ImageBox>
                                    <BrowseDressImageWrapper>
                                        <Image src="/assets/banners/party.png" alt="party-dressstyle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-fit-cover rounded-5' />
                                        <BrowseDressTitle className='position-absolute mt-3 ms-3'>
                                            {t('party')}
                                        </BrowseDressTitle>
                                    </BrowseDressImageWrapper>
                                </ImageBox>
                            </StyledLink>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <StyledLink href="/shop?category=gym">
                                <ImageBox>
                                    <BrowseDressImageWrapper>
                                        <Image src="/assets/banners/gym.png" alt="gym-dressstyle" fill className='object-fit-cover rounded-5' />
                                        <BrowseDressTitle className='position-absolute mt-3 ms-3'>
                                            {t('gym')}
                                        </BrowseDressTitle>
                                    </BrowseDressImageWrapper>
                                </ImageBox>
                            </StyledLink>
                        </div>

                    </div>
                </BrowseDressWrapper>
            </BrowseDressSection>
        </>
    )
}

export default BrowseDressStyle