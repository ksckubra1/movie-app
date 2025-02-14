import React, { useEffect, useState } from 'react'
import { TMDBAPI } from '../infra/tmdb_api'


const Genre = ({ setSelectedGenre, selectedGenre }) => {

    const tmdbAPI = new TMDBAPI(import.meta.env.VITE_TMDB_API_KEY)

    const [genres, setGenres] = useState([])

    useEffect(() => {
        tmdbAPI.listGenres().then((genres) => {
            setGenres(genres)
        })
    }, [])


    return (
        <div className='xl:flex gap-5 items-center h-16 hidden justify-center bg-[#d89008]'>

            {
                genres && genres.map((genre) => {
                    return (
                        <div onClick={() => setSelectedGenre(genre)} key={genre.id} className={`${selectedGenre?.id === genre.id ? "text-red-800 font-medium" : ""} font-semibold cursor-pointer hover:scale-110 hover:text-red-800 transform duration-200 ease-in`}>{genre.name}</div>
                    )
                })
            }

        </div>
    )
}

export default Genre
