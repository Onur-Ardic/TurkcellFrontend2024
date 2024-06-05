import React from 'react';
import { logo } from '../../assets/index';
// import { navLinks } from './../../constants/index';
import { Link } from 'react-scroll';
import { navLinks } from './../../constants/NavLinks';

const Navbar = () => {
    return (
        <div className='w-full sticky top-0 z-20 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div className='w-50 rounded-md'>
                <img className='w-16' src={logo} alt='' />
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {navLinks.map(({ _id, title, link }) => (
                        <li
                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300   '
                            key={_id}
                        >
                            <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
