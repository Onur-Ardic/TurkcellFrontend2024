import React, { useState } from 'react';
import Education from './Education';
import About from './About';
import Title from './../shared/Title';
import Certificates from './Certificates';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [aboutData, setAboutData] = useState(false);
    const [certificatesData, setCertificatesData] = useState(false);

    return (
        <section
            id='resume'
            className='w-full border-b-[1px] border-b-black flex flex-col items-center'
            style={{ textAlign: 'center', margin: 'auto', width: '80%' }}
        >
            <div className='flex justify-center my-20 items-center text-center'>
                <Title title='' description='Öz Geçmişim' />
            </div>
            <div className='w-full flex justify-center'>
                <ul
                    className='w-full max-w-4xl grid grid-cols-5 text-center'
                    style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
                >
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setAboutData(false) &
                            setCertificatesData(false)
                        }
                        className={`cursor-pointer p-2 ${
                            educationData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                        style={{
                            padding: '10px 20px',
                            border: educationData ? '2px solid #f00' : 'none',
                            cursor: 'pointer',
                            backgroundColor: educationData ? '#f00' : 'transparent',
                            color: educationData ? '#fff' : 'inherit',
                        }}
                    >
                        Eğitim/İş
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setAboutData(true) &
                            setCertificatesData(false)
                        }
                        className={`cursor-pointer p-2 ${
                            aboutData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                        style={{
                            padding: '10px 20px',
                            border: aboutData ? '2px solid #f00' : 'none',
                            cursor: 'pointer',
                            backgroundColor: aboutData ? '#f00' : 'transparent',
                            color: aboutData ? '#fff' : 'inherit',
                        }}
                    >
                        Hakkımda
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setAboutData(false) &
                            setCertificatesData(true)
                        }
                        className={`cursor-pointer p-2 ${
                            certificatesData
                                ? 'border-designColor rounded-lg'
                                : 'border-transparent'
                        } resume`}
                        style={{
                            padding: '10px 20px',
                            border: certificatesData ? '2px solid #f00' : 'none',
                            cursor: 'pointer',
                            backgroundColor: certificatesData ? '#f00' : 'transparent',
                            color: certificatesData ? '#fff' : 'inherit',
                        }}
                    >
                        Sertifikalar
                    </li>
                </ul>
            </div>

            <div className='w-full flex justify-center'>
                {educationData && <Education />}
                {aboutData && <About />}
                {certificatesData && <Certificates />}
            </div>
        </section>
    );
};

export default Resume;
