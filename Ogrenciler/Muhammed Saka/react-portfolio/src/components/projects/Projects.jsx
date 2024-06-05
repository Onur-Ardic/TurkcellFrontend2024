import React from 'react';
import Title from './../shared/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from '../../assets';

const Projects = () => {
    return (
        <div
            id='projects'
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className='flex justify-center items-center text-center mb-36'>
                <Title
                    title=''
                    description='Projelerim'
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard
                    title='E-Ticaret Sitesi'
                    description='Kendi ürünlerimizi satmaya çalıştığımız (en az 3 farklı ürün) e-ticaret sitesi.'
                    src={projectOne}
                    githubLink='https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/Muhammed%20Saka/odev1'
                    projectLink='#'
                />
                <ProjectCard
                    title='Kütüphane Projesi'
                    description='Javascript ile yapılmış kütüphane projesi.'
                    src={projectTwo}
                    githubLink='https://github.com/waroi/TurkcellFrontend2024/tree/main/Ogrenciler/Muhammed%20Saka/odevv2'
                    projectLink='#'
                />
                <ProjectCard
                    title='Upstart Website'
                    description='Grup İle Yapmış Olduğumuz Web Sitesi'
                    src={projectThree}
                    githubLink='https://github.com/kullanici/proje3'
                    projectLink='https://shreethemes.in/upstart/layouts/index.html'
                />
                <ProjectCard
                    title='BINIOG Website'
                    description='Grup İle Yapmış Olduğumuz Web Sitesi'
                    src={projectFour}
                    githubLink='https://github.com/kullanici/proje4'
                    projectLink='https://geniusdevs.com/themeforest/biniog/biniog-dark1/index.html'
                />
                <ProjectCard
                    title='DRUCO Website'
                    description='Grup İle Yapmış Olduğumuz Web Sitesi'
                    src={projectFive}
                    githubLink='https://github.com/kullanici/proje5'
                    projectLink='https://demo.theme-sky.com/druco/'
                />
                <ProjectCard
                    title='Agon website'
                    description='Grup İle Yapmış Olduğumuz Web Sitesi'
                    src={projectSix}
                    githubLink='https://github.com/kullanici/proje6'
                    projectLink='https://agon-nextjs-13.vercel.app/index-2'
                />
            </div>
        </div>
    );
};

export default Projects;
