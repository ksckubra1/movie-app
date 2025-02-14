import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { TMDBAPI } from '../infra/tmdb_api'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoriteSlice';



const MovieDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [findMovieValue, setFindMovieValue] = useState(null)
    const [movieDetail, setMovieDetail] = useState({})
    const { favoriteMovies } = useSelector(store => store.favorites)

    const findMovie = () => {
        const movieValue = favoriteMovies.some(movie => movie.id === id)
        setFindMovieValue(movieValue)
    }

    const tmdbAPI = new TMDBAPI(import.meta.env.VITE_TMDB_API_KEY)

    const {
        title,
        overview,
        vote_average,
        backdrop_path,
        genres,
        release_date,
        poster_path,
    } = movieDetail

    useEffect(() => {
        tmdbAPI.getMovieDetail(id).then((movieDetail) => {
            setMovieDetail(movieDetail)
            findMovie()
        })

        console.log('findMovieValue:', findMovieValue)


    }, [findMovieValue])

    const handleAddFavorite = () => {
        const payload = {
            id
        }
        dispatch(removeFavorite(payload));
        findMovie()
    }

    const handleRemoveFavorite = () => {
        const payload = {
            id,
            title,
            genres,
            poster_path,
            vote_average
        }

        dispatch(addFavorite(payload))
        findMovie()
    }




    return (
        <div className='h-screen flex flex-col relative'>
            <div className="absolute h-full w-full movieDetailstyle"></div>
            <img className='h-full w-full object-cover ' src={tmdbAPI.getImgUrl(backdrop_path)} alt="" />

            <div className="text-white/60 absolute bottom-0 left-0 px-20 py-10 w-full flex flex-col gap-6">
                <h1 className='md:text-3xl text-xl text-[#d89008] drop-shadow-[10px_20px_25px_rgba(0,0,0)] font-bold'>{movieDetail.title}</h1>
                <div className="flex flex-col gap-2">
                    <div className='flex gap-1 items-center '>
                        <FaStar className='text-[#d89008]' />
                        <div className='font-semibold drop-shadow-[10px_20px_25px_rgba(0,0,0)]'>
                            {vote_average?.toFixed(1)}
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div className="flex items-center gap-2">
                            <span className='text-[#d89008]'>Year:</span>
                            <span className='text-sm font-semibold'>{release_date}</span>
                        </div>
                        {
                            findMovieValue && findMovieValue ?
                                <button onClick={() => handleAddFavorite()} className=' bg-[#5f030b] text-xs items-center font-semibold flex gap-2 cursor-pointer text-white/60 px-3 py-1 rounded-xl'>Remove</button>
                                :
                                <button onClick={() => handleRemoveFavorite()} className='bg-[#118207] text-xs items-center font-semibold flex gap-2 cursor-pointer text-white/60 px-3 py-1 rounded-xl'>Add</button>

                        }
                    </div>
                    <div className="flex gap-2">
                        <div className="text-[#d89008]">Genres:</div>
                        {genres && genres ?
                            <div className="">{genres.map(genre => genre.name).join(', ')}</div>
                            :
                            ""
                        }
                    </div>
                    <div className=''>
                        <span className='text-[#d89008]'> Overview:</span>
                        &nbsp;  {overview}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MovieDetail
