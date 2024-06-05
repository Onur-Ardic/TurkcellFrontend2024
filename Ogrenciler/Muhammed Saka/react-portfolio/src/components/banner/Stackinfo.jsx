import React from 'react';
import {
    FaGithub,
    FaHtml5,
    FaLinkedinIn,
    FaReact,
    FaTwitter,
} from 'react-icons/fa';
import { SiCss3, SiJavascript } from 'react-icons/si';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Stackinfo = () => {
    const [text] = useTypewriter({
        words: ['Musician.', 'Front-End Developer.', 'Company Owner.'],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>DÜNYAMA HOŞ GELDİNİZ</h4>
                <h1 className='text-6xl font-bold text-white'>
                Merhaba ben {''}
                    <span className='text-designColor capitalize'>
                        Muhammed Saka
                    </span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a<span> {text}</span>
                    <Cursor
                        cursorBlinking='true'
                        cursorStyle='|'
                        cursorColor='#ff014f'
                    />
                </h2>

                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                Tutkulu ve yetenekli bir front-end geliştirici olarak, yazılım geliştirme ilkelerinde sağlam bir temele sahibim. Kullanıcı dostu, verimli ve ölçeklenebilir çözümler oluşturma konusundaki tutkum, hem bireysel projelerde hem de işbirlikçi ortamlarda kendini gösterir. Müzisyen kimliğim, yaratıcı problem çözme yeteneklerimi ve estetik anlayışımı pekiştirirken, geliştirme sürecine sanatsal bir dokunuş katmamı sağlar.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Bağlantılarım
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <a
                                href='https://github.com/sarvanss'
                                target='_blank'
                                className='bannerIcon'
                                rel='noreferrer'
                            >
                                <FaGithub />
                            </a>
                        </span>
                        <span className='bannerIcon'>
                            <a
                                className='bannerIcon'
                                href='https://twitter.com/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter />
                            </a>
                        </span>
                        <span className='bannerIcon'>
                            <a
                                className='bannerIcon'
                                href='https://www.linkedin.com/in/sarvanss/'
                                target='_blank'
                                rel='noreferrer'                        
                                >
                            <FaLinkedinIn />
                            </a>
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        YETENEKLERİM
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaHtml5 />
                        </span>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <SiJavascript />
                        </span>
                        <span className='bannerIcon'>
                            <SiCss3 />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stackinfo;
