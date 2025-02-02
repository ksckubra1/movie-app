import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import React from 'react'

const Navbar = () => {

    return (
        <nav className='flex justify-between h-20 items-center px-20'>
            <div className="">
                <Link to="/">
                    <h1 className='font-black text-white hover:text-yellow-700 text-2xl'>MovieApp</h1>
                </Link>
            </div>
            <div className="">
                <PiFilmReelFill className='text-yellow-700 text-2xl' />
            </div>
            <div className="">
                <ul className='flex items-center gap-6'>
                    <li>
                        <Link to="/">
                            <TiHome className='text-lg text-white hover:text-yellow-700' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-list">
                            <FaHeart className='text-md text-white hover:text-yellow-700' />
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
