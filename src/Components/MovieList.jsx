import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../redux/slices/movieListSlice';
import MovieCard from './MovieCard';
import Loading from './Loading';
import Error from './Error';




const MovieList = () => {

    const { movieList, status, error } = useSelector((store) => store.movieList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieList())
    }, [])



    return (
        <div className='flex items-center h-full justify-center bg-black'>

            {
                status === 'fulfilled' ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 xl:grid-cols-5 gap-y-10 gap-x-6">
                        {
                            movieList && movieList.map((movie) => {
                                return (
                                    <MovieCard key={movie.id} movie={movie} />

                                )
                            })
                        }
                    </div> : status === 'pending' ?
                        <Loading /> :
                        <Error error={error} />
            }
        </div>
    )
}

export default MovieList
