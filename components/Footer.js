'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

import { downloadButtons } from '@/constants';

const Footer = () => {
    return (
        <footer className='w-full fixed bottom-0 flex items-center justify-between px-4 md:px-8 py-4 lg:px-16'>

            {/* download buttons */}
            <div className='flex items-center justify-between gap-2 lg:gap-6'>
                {downloadButtons.map((button, index) => (
                    <button
                        key={index}
                        className='flex items-center justify-between gap-2 lg:gap-3 border border-white px-[14px] py-[8px] md:px-[15px] md:py-[10px] lg:px-[20px] lg:py-[14px] rounded-[7px] bg-black text-white'
                        onClick={() => { }}
                    >
                        <div className='relative w-4 h-4 md:w-6 md:h-6'>
                            <Image src={button.src} alt={button.title} className='object-contain' fill />
                        </div>
                        <p className='uppercase font-extrabold text-[10px] lg:text-[12px] tracking-[0.5px] leading-[18px] text-center text-white font-agrandir'>{button.title}</p>
                    </button>
                ))}
            </div>

            {/* down arrow */}
            <Link href='/' className='hidden sm:block relative w-6 h-6'>
                <Image src='/arrow-down.png' alt='arrow-down' className='object-contain' fill />
            </Link>

            {/* policy text */}
            <div className='hidden sm:flex items-center justify-between gap-4'>
                <p className='text-[10px] leading-[13px] text-[#B6B6B6] md:w-[240px] md:h-[80px] lg:w-[363px] lg:h-[65px] mb-4 font-mulish'>
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                    See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </p>

                {/* social media links */}
                <Link href='/' className='relative w-[15px] h-[15px] sm:w-[21px] sm:h-[21px] text-white cursor-pointer'>
                    <Image src='/icon.png' alt='icon' className='object-contain' fill />
                </Link>

                <Link href='/'>
                    <FaTwitter className='w-[15px] h-[15px] sm:w-[21px] sm:h-[21px] text-white cursor-pointer' />
                </Link>

                <Link href='/'>
                    <FaInstagram className='w-[15px] h-[15px] sm:w-[21px] sm:h-[21px] text-white cursor-pointer' />
                </Link>
            </div>

        </footer>
    )
}

export default Footer
