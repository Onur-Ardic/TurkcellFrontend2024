import React from 'react';
import Title from '../shared/Title';
import ContactIcons from './ContactIcons';

const ContactUs = () => {
    return (
        <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center my-20 text-center '>
                <Title title='' description='Benimle İletişime Geçin' />
            </div>
            <div className='w-full'>
                <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                    <ContactIcons />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;