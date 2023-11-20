import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import AuthorizeUser from './AuthorizeUser';
import AuthorizeUserMobile from './AuthorizeUserMobile';
import NavBrand from './NavBrand';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Blogs', to: '/blogs' },
        { id: 3, text: 'Checkup', to: '/checkup' },
        { id: 4, text: 'Hospitals', to: '/hospitals' },
        { id: 5, text: 'Contact', to: '/contact' },
    ]
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    window.addEventListener('scroll', onChangeHeader)

    return (
        <header className={changeHeader ? " bg-indigo-500 fixed z-50 top-0 left-0 w-full transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            {/* desktop nav  */}
            <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-12 py-6">
                <div className="hidden md:flex pl-24 lg:flex">
                    <NavBrand />
                </div>
                <div className="hidden md:flex lg:flex space-x-8">
                    <ul className="flex bg-transparent rounded-xl border border-white shadow-2xl p-4 items-center gap-5">
                        {menu.map(item => (
                            <div className='flex'>
                            <li key={item.id}>
                                <NavLink exact to={item.to} className="text-white text-md poppins" activeClassName="flex border-b-2 border-white">{item.text}</NavLink>
                            </li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='lg:flex md:flex hidden'>
                <AuthorizeUser />
                </div>
                {/* menu icon  */}
                <div className="block m-auto md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-black text-black border border-black focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>
            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 p-4 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                        <ul className="mb-2">
                            {menu.map(item => (
                                <li key={item.id} className="mb-3">
                                    <NavLink exact key={item.id} to={item.to} className="text-gray-600 poppins text-lg text-center py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default block rounded-lg" activeClassName="border-l-4 border-red-300 bg-gray-200">
                                    {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <AuthorizeUserMobile />
                        </div>
                    </nav>
                </Fade>
            )}
        </header>  
    )
    }

export default Navbar