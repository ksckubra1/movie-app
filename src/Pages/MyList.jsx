import { useSelector } from 'react-redux'
import { TMDBAPI } from '../infra/tmdb_api'
import MovieCard from '../components/MovieCard';


const MyList = () => {

    const { favoriteMovies } = useSelector((store => store.favorites))

    const tmdbAPI = new TMDBAPI()

    return (
        <div className='h-full flex flex-col items-center py-20'>
            <div className="grid grid-cols-4 gap-10">
                {
                    favoriteMovies && favoriteMovies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyList
