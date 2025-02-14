import React, { useState } from 'react'
import Genre from '../components/Genre'
import MovieList from '../components/MovieList'

const Home = () => {

    const [selectedGenre, setSelectedGenre] = useState(null)

    return (
        <div className='flex flex-col bg-black'>
            <Genre setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre} />
            <MovieList selectedGenre={selectedGenre} />
        </div>
    )
}

export default Home
