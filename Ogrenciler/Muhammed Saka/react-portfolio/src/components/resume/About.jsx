import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='py-12 font-titleFont flex flex-col items-center gap-20'
        >
            <div className='text-center'>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-designColor tracking-[4px]'>
                    </p>
                    <h2 className='text-4xl font-bold'>Hakkımda</h2>
                </div>
                <div className='mt-14 w-full max-w-2xl border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 p-4'>
                    <p className='text-lg leading-relaxed'>
                        Merhaba! Ben Muhammed Saka, yaratıcı bir ruh ve teknoloji tutkunu olarak kendimi ifade etmekten büyük mutluluk duyuyorum.
                    </p>
                    <p className='text-lg leading-relaxed'>
                        Öncelikli olarak, bir Front-End Yazılımcısı olarak çalışıyorum. Kullanıcı deneyimini ön planda tutarak estetik ve fonksiyonel web arayüzleri geliştirmek benim uzmanlık alanım. Modern web teknolojilerini kullanarak, kullanıcıların beklentilerini aşan projeler üretmeyi hedefliyorum.
                    </p>
                    <p className='text-lg leading-relaxed'>
                        Bunun yanı sıra, sanata olan tutkum beni sanatçı kimliğimle birleştiriyor. Görsel sanatlar ve müziğin büyülü dünyasında kendimi ifade etmekten keyif alıyorum. Özellikle remix şarkılar yaparak müziğe olan sevgimi farklı bir boyutta yaşıyorum ve bu alanda sürekli kendimi geliştiriyorum.
                    </p>
                    <p className='text-lg leading-relaxed'>
                        Ayrıca, bir müzik dağıtım şirketinin sahibiyim. Bu şirket aracılığıyla, yetenekli müzisyenlerin eserlerini daha geniş kitlelere ulaştırmalarına yardımcı oluyorum. Müzik endüstrisinde yenilikçi çözümler sunarak sanatçılara destek olmak benim için büyük bir gurur kaynağı.
                    </p>
                    <p className='text-lg leading-relaxed'>
                        Teknoloji ve sanatın birleştiği bu yolculukta, her iki alanın da sunduğu fırsatları keşfetmekten ve yaratıcı projeler üretmekten büyük heyecan duyuyorum.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
