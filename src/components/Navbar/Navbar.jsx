import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"
import logoDark from "../../assets/logodark.png"
export default function Navbar() {

    const links = [
        'features', "about", 'reviews', 'faq'
    ]

    const [dark, setdark] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

      const handleDark = () => {
        const newDark = !dark;
        setdark(newDark)
        document.documentElement.classList.toggle('dark', newDark)
        localStorage.setItem('theme', newDark && 'dark')
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setdark(true)
        }
    }, [])





    const handleopen = () => {
        setIsOpen(prev => !prev)
    }

    return (<>
        <nav className={`bg-white dark:bg-[#141414] transition-colors duration-300 padding shadow-md flex justify-between items-center fixed top-0 w-full  z-50`}>
            <Link to={'/'} className='md:w-40 w-28 block'>
                <img src={logo} className='dark:hidden' alt="" />
                <img src={logoDark} className='dark:block hidden' alt="" />
            </Link>
            <ul className={`hidden md:flex items-center space-x-5 text-text-two`}>
                {links.map((link, i) => (
                    <NavLink to={`${link}`} className={`${link === 'faq' ? 'uppercase' : 'capitalize'} font-medium`}>{link}</NavLink>
                ))}
            </ul>
            <div className='text-text-one flex items-center space-x-2 text-[22px]'>
                <button className='hidden md:flex items-center  gap-x-2 rounded-full bg-purple text-white px-4 py-2  btn font-Fredoka font-bold'><i className="bi bi-heart text-[16px] mt-1 cursor-pointer"></i> <span>Donate Now</span></button>
                <button onClick={handleDark} className='-rotate-10 ml-4 cursor-pointer'><i className={`bi ${dark ? 'bi-sun-fill' : "bi-moon-fill"} text-text-one`}></i></button>
                <button onClick={handleopen} className='md:hidden'><i className="bi bi-list text-3xl"></i></button>
            </div>
        </nav>
        {/* {isOpen && <div onClick={() => setIsOpen(false)} className={`${isOpen ? 'opacity-100' : 'opacity-0'} fixed inset-0  bg-black/45 transition-all duration-300 z-[999]`} />} */}
        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[150%]'}  z-[999] transition-all duration-300 fixed inset-0  w-full bg-white dark:bg-bg text-text-one`}>
            <div className='inset-x-0 absolute h-16 bg-white dark:bg-[#141414] shadow-md'/>
            <button onClick={() => setIsOpen(false)} className='absolute end-6 top-4 text-[22px] z-[9999]'>
                <i className='bi bi-x-lg'></i>
            </button>


            <Link className='md:w-40 w-28 block absolute top-5 left-8' to={'/'}>
                <img src={logo} className='dark:hidden' alt="" />
                <img src={logoDark} className='dark:block hidden' alt="" />
            </Link>

            <ul className={` flex flex-col space-y-3 absolute left-8 top-20`}>
                {links.map((link, i) => (
                    <NavLink onClick={() => setIsOpen(false)} to={`${link}`} className={` ${link === 'faq' ? 'uppercase' : 'capitalize'}`}>{link}</NavLink>
                ))}
            </ul>
            <button className='absolute left-4 bottom-4 flex items-center  gap-x-2 rounded-full bg-purple text-white px-4 py-2  btn font-Fredoka font-bold'><i className="bi bi-heart text-[16px] mt-1"></i> <span>Donate Now</span></button>
        </div>

    </>)
}
