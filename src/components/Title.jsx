import React from 'react'

export default function Title({ title, classname }) {
    return (
        <div className='flex  gap-1 justify-center md:justify-start'>
            <i className='fa-solid fa-heart text-purple md:text-2xl'></i>

            <h2 className={`${classname} font-Fredoka md:text-5xl font-semibold text-text-one`}>
                {title}
            </h2>
            <i className='fa-solid fa-heart text-purple md:text-2xl'></i>
        </div>
    )
}
