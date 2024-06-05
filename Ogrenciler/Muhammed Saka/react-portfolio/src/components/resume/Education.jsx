import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='w-full flex  lgl:flex-row gap-10 lgl:gap-20'
        >
            {/* part one */}
            <div style={{ marginTop: '50px' }}>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2010-2023
                    </p>
                    <h2 className='text-3xl md:text-4xl font-bold mb-10'>
                        Eğitim Hayatım
                    </h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14'>
                    <ResumeCard
                        title='Üniversite Eğitimi'
                        subTitle='Dicle Üniversitesi - Bilgisayar Programcılığı'
                        percentage='3.90/4'
                    />
                    <ResumeCard
                        title='Lise Eğitimi'
                        subTitle='DTSO Bilim ve Teknik Lisesi'
                        percentage='90/100'
                    />
                    <ResumeCard
                        title='Ortaokul Eğitimi'
                        subTitle='Fevzi Çakmak Ortaokulu'
                        percentage='90/100'
                    />
                </div>
            </div>

            {/* Job Experience */}
            <div style={{ marginTop: '50px' }}> {/* İş bölümü için marjin eklendi */}
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-5'>
                    <p className='text-sm text-designColor tracking-[4px]'>
                        2022 - 2024
                    </p>
                    <h2 className='text-3xl md:text-4xl font-bold mb-10'>
                        İş Hayatım
                    </h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title='Bayi İletişim Merkezi'
                        subTitle='Turkcell Superonline'
                        description='Turkcell Superonline bayi iletişim merkezinde çalışmaya başladı'
                    />
                    <ResumeCard
                        title='Music Distributor Company Owner'
                        subTitle='Norn Music'
                        description="Spotify gibi dijital mağazalara müzik dağıtımı yapmaya başladı"
                    />
                    <ResumeCard
                        title='Müzisyen'
                        subTitle='Remix Yapımcılığı'
                        description="Spotify gibi dijital mağazalarda yayınlanan remix şarkılar yapmaya başladı"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
