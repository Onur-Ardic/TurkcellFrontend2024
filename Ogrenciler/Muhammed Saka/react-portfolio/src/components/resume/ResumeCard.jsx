import React from 'react';

const ResumeCard = ({ title, subTitle, description, percentage }) => {
    return (
        <div className='w-full h-1/3 group flex'>
            <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full flex justify-center items-center bg-black bg-opacity-60 -left-3 -top-2'>
                    <span className='w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
            </div>
            <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='tet-2xl font-semibold group-hover:text-white duration-300'>
                            {title}
                        </h3>
                        <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>
                            {subTitle}
                        </p>
                    </div>
                    <div className='w-20 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center font-medium shadow-shadowOne '>
                        <p>{percentage}</p>
                    </div>
                </div>
                <p children='text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ResumeCard;
