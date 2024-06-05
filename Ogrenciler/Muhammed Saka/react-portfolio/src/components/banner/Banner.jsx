import React from 'react';
import Stackinfo from './Stackinfo';
import BannerLogo from './BannerLogo';

const Banner = () => {
    return (
        <section
            id='home'
            className='w-full pt-10 pb-20 flex font-titleFont items-center border-b-black border-b-[1px]'
        >
            <Stackinfo />
            <BannerLogo />
        </section>
    );
};

export default Banner;
