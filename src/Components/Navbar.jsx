import React from 'react'
import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='flex justify-between h-20 bg-white items-center px-20'>
            <h1 className='font-black text-2xl drop-shadow-sm'>Movie App</h1>
            <div className="">
                <PiFilmReelFill className='text-red-800 text-2xl' />
            </div>
            <div className="">
                <ul className='flex items-center'>
                    <li><TiHome className='text-2xl' /></li>
                    <li><FaHeart className='text-xl' /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
