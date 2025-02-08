import React from 'react'
import { FaStar } from "react-icons/fa";
import { API_MOVIE_IMG_BASE_URL } from '../constants/api';


const MovieCard = ({ movie }) => {
    const { title, id, poster_path, vote_average } = movie
    return (
        <div>
            <div className='relative movieCardStyle overflow-hidden rounded-3xl'>
                <div className="w-full h-full absolute movieCardGradient"></div>
                <img className='w-56' src={API_MOVIE_IMG_BASE_URL + poster_path} alt={title} />
                <div className="p-2 absolute right-0 gap-2 bottom-0 rounded-md flex justify-center items-center">
                    <span className='font-semibold text-white'>
                        {
                            vote_average.toFixed(1)
                        }
                    </span>
                    <FaStar className='text-[#d89008]' />
                </div>
            </div>
        </div>
    )
}

export default MovieCard
