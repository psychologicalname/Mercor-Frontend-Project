'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { navLinks } from '@/constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');

    return (
        <nav className='w-full absolute top-0 z-10 flex items-center justify-between py-4 md:px-16 px-8'>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >

                {/* cash app logo */}
                <Link
                    href='/'
                    className='relative h-8 w-8'
                    onClick={() => {
                        setActive('');
                    }}>
                    <Image src='/logo.png' fill className='object-contain' alt='logo' />
                </Link>

                {/* navigation links */}
                <ul className='list-none hidden lg:flex items-center justify-between gap-4'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? 'text-white border-b-white border-b-2' : 'text-gray-200'} uppercase font-extrabold text-[12px] leading-[18px] tracking-[0.5px] cursor-pointer font-agrandir hover:text-white`}
                            onClick={() => setActive(link.title)}
                        >
                            <Link href={`#${link.id}`}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* For mobile and tablet device */}
                <div className='lg:hidden flex items-center'>
                    <button
                        className='relative w-[28px] h-[28px]'
                        onClick={() => setToggle(!toggle)}
                    >
                        <Image
                            src={toggle ? '/close.svg' : '/menu.svg'}
                            alt='menu'
                            className='object-contain cursor-pointer'
                            fill
                        />
                    </button>
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 mx-4 my-2 min-w-[140px] z-10 rounded-xl absolute top-20 right-0 bg-gradient-to-r from-neutral-950 to-neutral-700`}>
                        <ul className='list-none flex flex-col gap-4 justify-end items-start'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className='uppercase font-extrabold text-[12px] leading-[18px] tracking-[0.5px] cursor-pointer text-white font-agrandir'
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <Link href={`#${link.id}`}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* eye button */}
                <div className='hidden lg:block relative h-9 w-16'>
                    <Image src='/eye button.png' fill className='object-contain' alt='logo' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar