import React, { useState } from 'react'
import cat3 from "../../assets/cat3.jpg"
import Title from '../Title'

export default function Features() {

    const data = [
        {
            head:'25,000+',
            title:'Happy Families',
            desc:'Pets successfully matched with loving homes'
        },
        {
            head:'98%',
            title:'Success Rate',
            desc:'Adoption applications that find perfect matches'
        },
        {
            head:'1,200+',
            title:'Partner Shelters',
            desc:'Verified rescue organizations nationwide'
        },
        {
            head:'24/7',
            title:'Support',
            desc:'Expert guidance throughout your journey'
        },
    ]



    return (
        <div className='min-h-screen p bg-bg flex items-center  flex-col md:flex-row space-y-8 space-x-8 transition-colors duration-300'>
            <div className=' md:w-6/12 md:mx-0 mx-auto'>
                <Title title={'Why Choose Meow?'} classname={'md:mb-9 mb-3 text-3xl text-center md:text-left'} />

                <p className='font-Quicksand text-text-two text-center md:text-left'>Join thousands of families who've found their perfect companions through our trusted platform. We make pet adoption safe, simple, and supported every step of the way.
                </p>

                <div className='grid md:grid-cols-2 gap-3 mt-4 md:mt-6 '>
                    {data.map((item,i)=>(
                        <div key={i} className='bg-white dark:bg-[#141414] rounded-2xl  shadow-lg p-8 flex flex-col space-y-1 font-Fredoka'>
                            <h3 className='text-purple font-semibold text-3xl'>{item.head}</h3>
                            <h3 className='text-text-one font-semibold text-[20px]'>{item.title}</h3>
                            <h3 className='text-text-two'>{item.desc}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className=' md:w-5/12  md:h-[570px] ml-auto '>
                <img src={cat3} className='rounded-2xl w-full h-full object-cover object-top shadow-2xl' alt="" />
            </div>
        </div>
    )
}
