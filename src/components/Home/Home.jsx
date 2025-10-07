import React, { useState } from 'react'

import dog1 from '../../assets/dog1.jpg'
import dog2 from '../../assets/dog2.jpg'
import cat1 from '../../assets/cat1.jpg'
import cat2 from '../../assets/cat2.jpg'

export default function Home() {


    const [first, setFirst] = useState(false)


    return (
        <div className='p min-h-screen flex md:flex-row flex-col  items-center justify-between bg-bg transition-colors duration-300'>
            <div className='md:w-5/12 md:-translate-y-5 flex flex-col gap-y-6 md:gap-y-0 transition-colors duration-300 text-center md:text-left  '>
                <p className='font-Quicksand text-purple w-fit text-[24px] flex items-center md:mb-[24px] font-semibold bg-purple-400/15 p-4 rounded-full mx-auto md:mx-0'> <i className="bi bi-globe-americas text-sm me-1 text-text-one "></i>Trusted by 50,000+ pet lovers</p>
                <h2 className='md:text-[56px] text-4xl font-Fredoka font-bold md:leading-16 text-text-one md:mb-[24px]'><span className='block' >Adopt love,</span>foster happiness.</h2>
                <p className='font-Quicksand text-[18px] text-text-two'>Find your forever friend fast, safe, and loving. Connect with verified shelters and adopt with confidence.</p>
                <div className='flex items-center md:mt-[24px] space-x-5 mx-auto md:mx-0'>
                    <button className='shadow-xl cursor-pointer flex items-center text-[16px] gap-x-2 rounded-full bg-purple text-white px-[32px] py-[16px]  btnn font-Fredoka font-semibold'><span>Adopt Now</span></button>
                    <button className='shadow-xl cursor-pointer flex items-center text-[16px] gap-x-2 rounded-full bg-white dark:bg-[#313130] text-purple border-2 border-purple px-[32px] py-[16px]  btnn font-Fredoka font-semibold'><span>Donate Now</span></button>
                </div>
                <div className='flex items-center space-x-3 mt-7 text-center md:text-left'>
                    <div className='flex flex-col '><span className='font-Fredoka font-bold text-purple md:text-[30px]'>50K+</span><span className='font-Quicksand text-base text-text-two'>Happy Adopters</span></div>
                    <div className='flex flex-col '><span className='font-Fredoka font-bold text-purple md:text-[30px]'>15K+</span><span className='font-Quicksand text-base text-text-two'>Pets Adopted</span></div>
                    <div className='flex flex-col '><span className='font-Fredoka font-bold text-purple md:text-[30px]'>200+</span><span className='font-Quicksand text-base text-text-two'>Partner Shelters</span></div>
                </div>
            </div>
            <div className='md:w-6/12'>

                <div className=' grid md:grid-cols-2 gap-3'>
                    <div className='card'><img className='w-full h-full object-cover' src={dog1} alt="" /></div>
                    <div className='card'><img className='w-full h-full object-cover' src={cat1} alt="" /></div>
                    <div className='card'><img className='w-full h-full object-cover' src={cat2} alt="" /></div>
                    <div className='card'><img className='w-full h-full object-cover' src={dog2} alt="" /></div>
                </div>

            </div>
        </div>
    )
}
