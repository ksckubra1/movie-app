import React from 'react'
import Genre from '../components/Genre'
import MovieList from '../components/MovieList'

const Home = () => {
    return (
        <div className='flex flex-col bg-black'>
            <Genre />
            <MovieList />
        </div>
    )
}

export default Home
