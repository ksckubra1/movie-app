import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import React from 'react'

import { HOME, MY_LIST } from '../constants/path'
import { useSelector } from "react-redux";


const Navbar = () => {

    const { favoriteMovies } = useSelector(store => store.favorites)




    return (
        <nav className='flex justify-between bg-[#000000] h-20 items-center px-20'>
            <div className="">
                <Link to={HOME}>
                    <h1 className='font-black text-white hover:text-yellow-700 text-2xl'>MovieApp</h1>
                </Link>
            </div>
            <div className="">
                <PiFilmReelFill className='text-yellow-700 text-3xl hover:animate-spin' />
            </div>
            <div className="">
                <ul className='flex items-center gap-6'>
                    <li>
                        <Link to={HOME}>
                            <TiHome className='text-lg text-white hover:text-yellow-700' />
                        </Link>
                    </li>
                    <li className="relative h-14 w-8 flex items-center">
                        <Link to={MY_LIST}>
                            <div className={`${favoriteMovies.length === 0 ? "hidden" : ""} top-0 absolute right-0 rounded-full border-2 text-[10px] text-yellow-700 font-bold py-0.5 px-1.5  border-yellow-700`}>
                                {
                                    favoriteMovies.length > 0 ?
                                        favoriteMovies.length :
                                        ""
                                }
                            </div>
                            <FaHeart className='text-md text-white hover:text-yellow-700' />
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
