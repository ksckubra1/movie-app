import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { TMDBAPI } from '../infra/tmdb_api';
import Error from '../components/Error'


const MovieList = ({ selectedGenre }) => {

    const [movieList, setMovieList] = useState(null)
    const tmdbAPI = new TMDBAPI(import.meta.env.VITE_TMDB_API_KEY)


    useEffect(() => {
        if (selectedGenre) {
            tmdbAPI.listMoviesByGenre(selectedGenre.id).then(setMovieList)
            return
        }
        tmdbAPI.listMovies().then(setMovieList)
    }, [selectedGenre])



    return (
        <div className='flex items-center flex-col h-full justify-center bg-black'>
            {
                movieList ?
                    (<div className="flex flex-col">
                        <div className="text-white pt-10 text-2xl">{selectedGenre ? selectedGenre.name : "Discover"}</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 pb-20 xl:grid-cols-5 gap-y-10 gap-x-6">
                            {
                                movieList && movieList.map((movie) => {
                                    return (
                                        <MovieCard key={movie.id} movie={movie} />
                                    )
                                })
                            }
                        </div>
                    </div>)
                    :
                    (<Error />)
            }

        </div>
    )
}

export default MovieList
