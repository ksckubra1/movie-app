import { useSelector } from 'react-redux'
import { TMDBAPI } from '../infra/tmdb_api'
import MovieCard from '../components/MovieCard';


const MyList = () => {

    const { favoriteMovies } = useSelector((store => store.favorites))

    const tmdbAPI = new TMDBAPI()

    return (
        <div className='min-h-screen flex flex-col items-center justify-center pb-20'>

            {
                favoriteMovies.length > 0 ?
                    <div className="h-full">
                        <div className="text-white py-10 md:text-2xl px-4 xl:px-0 sm:text-xl ">Your Favorite Movies</div>

                        <div className="grid grid-cols-3 md:grid-cols-4 gap-10 px-4 xl:px-0">
                            {
                                favoriteMovies && favoriteMovies.map((movie) => {
                                    return (
                                        <MovieCard key={movie.id} movie={movie} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className="text-white text-lg">... Favorite movie not added ...</div>
            }
        </div>
    )
}

export default MyList
