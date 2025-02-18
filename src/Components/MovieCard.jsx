import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TMDBAPI } from '../infra/tmdb_api';



const MovieCard = ({ movie }) => {
    const { title, id, poster_path, vote_average } = movie

    const tmdbAPI = new TMDBAPI(import.meta.env.VITE_TMDB_API_KEY)

    return (
        <Link to={`/movie/${id}`}>
            <div className='relative movieCardStyle overflow-hidden rounded-3xl'>
                <div className="w-full h-full absolute movieCardGradient"></div>
                <img className='w-56' src={tmdbAPI.getImgUrl(poster_path)} alt={title} />
                <div className="p-2 absolute right-0 gap-2 bottom-0 rounded-md flex justify-center items-center">
                    <span className='font-semibold text-white'>
                        {
                            vote_average.toFixed(1)
                        }
                    </span>
                    <FaStar className='text-[#d89008]' />
                </div>
            </div>
        </Link >
    )
}

export default MovieCard
